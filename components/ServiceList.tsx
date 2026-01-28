
import React from 'react';

const ServiceList: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Optimized Image Frame - Reduced height to eliminate excessive space */}
      <div className="w-full border-y border-neutral-100 group cursor-crosshair flex items-center justify-center overflow-hidden bg-white">
        <img 
          src="https://lh3.googleusercontent.com/d/1zmHYqA2eQTRx-FJC__Iu_QFidloqV5qz" 
          alt="Custom Tailored Automation" 
          className="w-full h-auto max-h-[220px] object-contain opacity-95 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.01]"
        />
      </div>

      {/* Improved Diagnostic Framework - Specific to Automation */}
      <div className="relative">
        {/* Superior Header Section */}
        <div className="mb-14 group">
          <div className="flex items-end justify-between border-b-[3px] border-black pb-4 relative">
            {/* Left Side: Title */}
            <div className="flex flex-col space-y-1">
              <h3 className="text-[22px] font-black uppercase tracking-[-0.02em] leading-none text-black">
                Automation <span className="text-blue-600 italic font-serif">Diagnostics</span>
              </h3>
            </div>
            
            {/* Pulsing focal point */}
            <div className="absolute -bottom-[6px] left-1/4 w-3 h-3 bg-white border-2 border-black rounded-full flex items-center justify-center">
               <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Technical Step Progression */}
        <div className="relative mb-16 px-4">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-100 -z-10"></div>
          <div className="grid grid-cols-3 gap-8">
            {/* Step 01 */}
            <div className="relative group">
              <div className="bg-white border-2 border-neutral-200 p-6 transition-all duration-300 group-hover:border-black group-hover:shadow-xl relative z-10">
                <span className="absolute -top-3 left-4 bg-black text-white text-[8px] font-black px-2 py-0.5 tracking-tighter uppercase">Signal Capture</span>
                <div className="mb-4">
                   <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[10px] font-black group-hover:bg-black group-hover:text-white transition-colors">01</div>
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">Observe Workflow</h4>
                <p className="text-[9px] text-neutral-400 uppercase leading-tight font-medium">Non-intrusive metadata mapping of daily team operations.</p>
              </div>
            </div>

            {/* Step 02 - Core Blue Accent */}
            <div className="relative group">
              <div className="bg-white border-2 border-blue-600 p-6 transition-all duration-300 shadow-[0_15px_30px_rgba(37,99,235,0.1)] group-hover:shadow-2xl relative z-10">
                <span className="absolute -top-3 left-4 bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 tracking-tighter uppercase">Analysis Core</span>
                <div className="mb-4">
                   <div className="w-8 h-8 rounded-full border-2 border-blue-600 bg-blue-50 flex items-center justify-center text-[10px] font-black text-blue-600">02</div>
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">Pinpoint Criticals</h4>
                <p className="text-[9px] text-blue-800/60 uppercase leading-tight font-medium">Identification of time-leaks and manual friction points.</p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="relative group">
              <div className="bg-white border-2 border-neutral-200 p-6 transition-all duration-300 group-hover:border-black group-hover:shadow-xl relative z-10">
                <span className="absolute -top-3 left-4 bg-black text-white text-[8px] font-black px-2 py-0.5 tracking-tighter uppercase">Synthesis</span>
                <div className="mb-4">
                   <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-[10px] font-black group-hover:bg-black group-hover:text-white transition-colors">03</div>
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">Assess & Diagnose</h4>
                <p className="text-[9px] text-neutral-400 uppercase leading-tight font-medium">Architecting the definitive path to full automation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data & Checklist Section */}
        <div className="grid grid-cols-12 gap-8">
          {/* Methodology Detail */}
          <div className="col-span-7 space-y-8">
            <div className="border-l-4 border-black pl-6 py-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-6">Internal Analysis Protocol</h4>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-tight text-black block mb-1">Active Process Shadowing</span>
                    <p className="text-[10px] text-neutral-500 leading-relaxed uppercase font-medium">We track individual task duration and hand-off frequency to establish a baseline of operational friction.</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-tight text-black block mb-1">Bottleneck Stratification</span>
                    <p className="text-[10px] text-neutral-500 leading-relaxed uppercase font-medium">Categorizing manual tasks by impact severity and automation feasibility to prioritize quick-wins.</p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-tight text-black block mb-1">Security & Compliance Audit</span>
                    <p className="text-[10px] text-neutral-500 leading-relaxed uppercase font-medium">Ensuring all proposed automated flows maintain strict data integrity and organizational security standards.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* High-End Checklist */}
          <div className="col-span-5">
            <div className="bg-[#020617] p-8 relative overflow-hidden group shadow-2xl rounded-sm border border-white/10 h-full">
              {/* Decorative scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-12 w-full animate-scanline pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Diagnostic Checklist for Automations</h4>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    "Eliminate manual data entry",
                    "Consolidate platform reporting",
                    "Automate client billing cycles",
                    "Audit internal coordination",
                    "Diagnose sync-gap latency"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-4 group/item cursor-pointer">
                      <div className="relative w-4 h-4 border border-blue-900 bg-[#0f172a] flex items-center justify-center group-hover/item:border-blue-400 transition-all">
                        <div className="w-1.5 h-1.5 bg-blue-500 scale-0 group-hover/item:scale-100 transition-transform shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                      </div>
                      <span className="text-[9px] font-bold text-neutral-300 uppercase tracking-widest group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceList;
