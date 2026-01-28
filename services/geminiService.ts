
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const getGeminiConsultation = async (history: ChatMessage[], userInput: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Formatting history for Gemini 3
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
    
    // Add current message
    contents.push({
      role: 'user',
      parts: [{ text: userInput }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: `You are a professional business consultant for AWD Team Management. 
        AWD specializes in:
        1. Automation: Replacing manual heavy tasks with digital workflows.
        2. Workflow: Enhancing team coordination and time management.
        3. Diagnostics: Auditing business operations for efficiency.

        Your goal is to explain to users how these three pillars can help their specific business problems. 
        Be professional, concise, and encourage them to book a real consultation. 
        If they ask about pricing, explain it depends on the diagnostic audit.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again or reach out to our team directly.";
  }
};
