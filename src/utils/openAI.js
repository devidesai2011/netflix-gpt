import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constants.js';

const client = new OpenAI({
    apiKey: OPEN_AI_KEY,
    dangerouslyAllowBrowser: true, // Enable browser usage (for development only)
});

export default client;