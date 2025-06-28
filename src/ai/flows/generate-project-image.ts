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
      "The generated image as a data URI or a placeholder URL. Expected format: 'data:<mimetype>;base64,<encoded_data>' or 'https://...'"
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

// Helper function to generate a consistent color from a string
function getPlaceholderColor(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash; // Ensure 32bit integer
    }
    let color = '';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xFF;
      // This manipulation ensures the color is not too light or dark
      const hex = ('00' + (value & 0x7F | 0x40).toString(16)).slice(-2);
      color += hex;
    }
    return color;
}

function getPlaceholderUrl(projectName: string): string {
    const bgColor = getPlaceholderColor(projectName);
    const textColor = 'FFFFFF'; // White text
    return `https://placehold.co/600x400/${bgColor}/${textColor}.png`;
}


const generateProjectImageFlow = ai.defineFlow(
  {
    name: 'generateProjectImageFlow',
    inputSchema: GenerateProjectImageInputSchema,
    outputSchema: GenerateProjectImageOutputSchema,
  },
  async ({name, description}) => {
    const placeholderUrl = getPlaceholderUrl(name);

    // If no API key is available, return a placeholder immediately.
    if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
      console.warn('GEMINI_API_KEY or GOOGLE_API_KEY not set. Skipping image generation and returning placeholder.');
      return { imageDataUri: placeholderUrl };
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
      return { imageDataUri: placeholderUrl };
    }
  }
);
