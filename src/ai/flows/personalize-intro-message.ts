// use server'

/**
 * @fileOverview A flow to personalize the introductory message based on the visitor's LinkedIn profile.
 *
 * - personalizeIntroMessage - A function that personalizes the introductory message.
 * - PersonalizeIntroMessageInput - The input type for the personalizeIntroMessage function.
 * - PersonalizeIntroMessageOutput - The return type for the personalizeIntroMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeIntroMessageInputSchema = z.object({
  linkedInProfile: z
    .string()
    .describe('The LinkedIn profile of the visitor.'),
});
export type PersonalizeIntroMessageInput = z.infer<
  typeof PersonalizeIntroMessageInputSchema
>;

const PersonalizeIntroMessageOutputSchema = z.object({
  personalizedMessage: z
    .string()
    .describe('The personalized introductory message.'),
});
export type PersonalizeIntroMessageOutput = z.infer<
  typeof PersonalizeIntroMessageOutputSchema
>;

export async function personalizeIntroMessage(
  input: PersonalizeIntroMessageInput
): Promise<PersonalizeIntroMessageOutput> {
  return personalizeIntroMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeIntroMessagePrompt',
  input: {schema: PersonalizeIntroMessageInputSchema},
  output: {schema: PersonalizeIntroMessageOutputSchema},
  prompt: `You are an AI assistant designed to personalize introductory messages for a developer's portfolio.

  Based on the visitor's LinkedIn profile, craft a brief and engaging introductory message that highlights the developer's understanding of the visitor's background and interests.

  LinkedIn Profile: {{{linkedInProfile}}}

  Personalized Message:`,
});

const personalizeIntroMessageFlow = ai.defineFlow(
  {
    name: 'personalizeIntroMessageFlow',
    inputSchema: PersonalizeIntroMessageInputSchema,
    outputSchema: PersonalizeIntroMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
