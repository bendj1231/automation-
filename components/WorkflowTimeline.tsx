
import React from 'react';

const WorkflowTimeline: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Visual Image Integration - No borders or shadows for a clean, integrated aesthetic */}
      <div className="relative w-full overflow-hidden group">
        <img 
          src="https://lh3.googleusercontent.com/d/1VeN94DrV4vAePN8VQl4ww90PyNs0I23g" 
          alt="Workflow Automation Timeline" 
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="bg-neutral-50 p-6 border-l-4 border-black">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-2">How We Automate Workflows</h4>
        <p className="text-[11px] text-neutral-600 leading-relaxed font-medium">
          Our automation framework is built on the principle of elimination through high-fidelity integration. We map your operational DNA to identify 'dead zones' where manual intervention slows growth and introduces risk. By deploying intelligent logic gates and cross-platform synchronization, we convert linear tasks into parallel automated cycles. This transition ensures that every data point—from team hours to complex financial reporting—moves through your organization with surgical precision and zero human friction, allowing your core team to focus on high-value strategy rather than administrative maintenance.
        </p>
      </div>
    </div>
  );
};

export default WorkflowTimeline;
