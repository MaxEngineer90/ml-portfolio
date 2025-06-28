'use server';
/**
 * @fileOverview A flow to generate a project image based on its description.
 *
 * - generateProjectImage - A function that generates an image for a project.
 * - GenerateProjectImageInput - The input type for the generateProjectImage function.
 * - GenerateProjectImageOutput - The return type for the generateProjectImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectImageInputSchema = z.object({
  name: z.string().describe('The name of the project.'),
  description: z.string().describe('A short description of the project.'),
});
export type GenerateProjectImageInput = z.infer<
  typeof GenerateProjectImageInputSchema
>;

const GenerateProjectImageOutputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "The generated image as a data URI. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateProjectImageOutput = z.infer<
  typeof GenerateProjectImageOutputSchema
>;

export async function generateProjectImage(
  input: GenerateProjectImageInput
): Promise<GenerateProjectImageOutput> {
  return generateProjectImageFlow(input);
}

const generateProjectImageFlow = ai.defineFlow(
  {
    name: 'generateProjectImageFlow',
    inputSchema: GenerateProjectImageInputSchema,
    outputSchema: GenerateProjectImageOutputSchema,
  },
  async ({name, description}) => {
    // If no API key is available, return a placeholder immediately.
    if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
      console.warn('GEMINI_API_KEY or GOOGLE_API_KEY not set. Skipping image generation and returning placeholder.');
      return { imageDataUri: 'https://placehold.co/600x400.png' };
    }

    try {
      const {media} = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: `Generate an abstract, modern, and visually appealing header image for a software project showcase. The image should visually represent the project without using any text.
        
        Project Name: "${name}"
        Description: "${description}"
        
        Style guidance: minimalist, tech-focused, clean lines, gradient colors, dark theme.`,
        config: {
          responseModalities: ['TEXT', 'IMAGE'],
        },
      });

      if (!media?.url) {
        throw new Error('Image generation failed to return media.');
      }

      return { imageDataUri: media.url };

    } catch (error) {
      console.error(`Failed to generate image for project "${name}":`, error);
      // Fallback to a placeholder if generation fails
      return { imageDataUri: 'https://placehold.co/600x400.png' };
    }
  }
);
