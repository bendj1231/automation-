
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="mb-10 relative text-center">
      <div className="max-w-xl mx-auto relative z-10">
        <h1 className="text-4xl font-black text-black leading-tight tracking-tighter uppercase mb-6">
          AWD Approach towards <br />
          <span className="text-blue-600 italic">Automation</span>
        </h1>
        <div className="h-1.5 w-24 bg-black mb-6 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
