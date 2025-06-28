import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import type {Plugin} from 'genkit';

const plugins: Plugin[] = [];

// Only add the Google AI plugin if an API key is available.
// This prevents Genkit from throwing an error during initialization
// when no key is present, which would crash the application.
if (process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY) {
  plugins.push(googleAI());
}

export const ai = genkit({
  plugins: plugins,
  model: 'googleai/gemini-2.0-flash',
});
