
import React from 'react';

const ExpenseTracking: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Visual Image Integration - Maintaining consistent framing with other sections */}
      <div className="relative w-full border border-neutral-100 overflow-hidden group bg-white flex justify-center">
        <img 
          src="https://lh3.googleusercontent.com/d/1v3mHwGKngDMTfP1cpHfojmAqucY4tYsD" 
          alt="Automated Expense Tracking Interface" 
          className="w-full h-auto object-contain max-h-[220px] transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </div>
    </div>
  );
};

export default ExpenseTracking;
