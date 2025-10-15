import { GoogleGenAI } from '@google/genai';
import { GEMINI_API_KEY } from './constants.js';

const geminiApi = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
export default geminiApi;