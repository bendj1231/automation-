
import React from 'react';

const ComparisonModule: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Visual Evidence Section: Core Automation Implementation */}
      <div className="relative group overflow-hidden rounded-xl border-2 border-neutral-100 shadow-sm">
        <div className="bg-neutral-50 overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/d/12d0jDvxWFDvxBOZGEuBMjYDmcple3pta" 
            alt="Data Entry and Invoicing Automation Interface" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="p-4 bg-white border-t border-neutral-100">
          <div className="flex items-start justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] text-neutral-500 leading-snug font-medium">
                Confirms the architecture's ability to synchronize raw input data directly into automated billing cycles, bypassing manual verification stages for 92% latency reduction.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="border-l-2 border-neutral-100 pl-4">
          <p className="text-[8px] font-black text-neutral-400 uppercase tracking-widest mb-1">Manual State</p>
          <p className="text-[10px] text-neutral-600 font-medium italic">High-friction workflows with recurring manual entry fatigue.</p>
        </div>
        <div className="border-l-2 border-blue-500 pl-4">
          <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">AWD Optimized</p>
          <p className="text-[10px] text-black font-bold">Algorithmic precision ensuring zero-touch processing.</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModule;
