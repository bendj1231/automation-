
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Executive AI assistant online. How can I assist with your infrastructure queries?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await getGeminiConsultation(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText || "System error. Please retry." }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-[#fdfdfd] border-2 border-neutral-200 rounded-lg overflow-hidden shadow-xl flex flex-col h-[500px] border-t-8 border-t-blue-500">
      <div className="bg-neutral-50 p-4 border-b border-neutral-100">
        <h3 className="text-xs font-black text-black uppercase tracking-[0.2em] flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          AI Strategy Partner
        </h3>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] p-3 text-xs leading-relaxed border-2 ${
              msg.role === 'user' 
                ? 'bg-black text-white border-black rounded-bl-lg' 
                : 'bg-white text-neutral-800 border-neutral-200 rounded-br-lg shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-neutral-100 p-2 px-4 rounded-full border-2 border-neutral-200">
               <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
               </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 border-t-2 border-neutral-100 bg-white">
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Inquire about AWD pillars..."
            className="w-full border-2 border-neutral-100 rounded px-3 py-2 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="w-full bg-black hover:bg-blue-600 disabled:opacity-50 text-white py-2 text-[10px] font-black uppercase tracking-widest transition-all"
          >
            {isLoading ? 'Processing...' : 'Transmit Message'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAssistant;
