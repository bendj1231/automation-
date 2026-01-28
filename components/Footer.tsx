
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pb-8">
      <div className="flex justify-between items-center border-t-4 border-black pt-10">
        <div className="flex items-center space-x-4">
          {/* Minimal AWD Logo Mark */}
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-xs">
            AWD
          </div>
          <div className="h-4 w-px bg-neutral-200"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-300">
            Automation | Workflow | Diagnostics
          </span>
        </div>

        <div className="flex items-center space-x-6">
          {/* Right side content removed as per request */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
