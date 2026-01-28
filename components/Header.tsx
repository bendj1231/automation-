
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-start mb-16 border-b border-neutral-100 pb-8">
      {/* Left side info */}
      <div className="flex flex-col">
        <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em] mb-1">Portfolio of Services</p>
        <p className="text-[10px] font-bold text-black tracking-tight uppercase">
          <span className="text-blue-600">Automation</span> | Workflow | Diagnostics
        </p>
      </div>

      {/* Right side info */}
      <div className="text-right max-w-[250px] space-y-0.5">
        <p className="text-[11px] font-mono text-black font-black uppercase tracking-tighter leading-tight">
          Inventory of Works for Automation
        </p>
        <p className="text-[11px] font-mono text-black font-black uppercase tracking-tighter leading-tight">
          Issue Date: 01/28/2026
        </p>
      </div>
    </header>
  );
};

export default Header;
