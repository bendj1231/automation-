
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkflowTimeline from './components/WorkflowTimeline';
import ExpenseTracking from './components/ExpenseTracking';
import ServiceList from './components/ServiceList';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  return (
    <div className="a4-wrapper">
      {/* Floating AI Assistant - "The Consultant" */}
      <div className="fixed right-8 bottom-8 z-50 w-80 hidden xl:block no-print">
        <GeminiAssistant />
      </div>

      <div className="a4-container">
        <Header />
        
        <main className="flex-grow space-y-12">
          <Hero />
          
          <div>
            <h2 className="text-lg font-black text-black uppercase tracking-widest border-b-2 border-black pb-1.5 mb-6">
              01. Workflow Lifecycle
            </h2>
            <WorkflowTimeline />
          </div>

          <div>
            <h2 className="text-lg font-black text-black uppercase tracking-widest border-b-2 border-black pb-1.5 mb-6">
              02. Expense Tracking Automation
            </h2>
            <ExpenseTracking />
          </div>

          <div>
            <h2 className="text-lg font-black text-black uppercase tracking-widest border-b-2 border-black pb-1.5 mb-6">
              03. Specialized Capabilities
            </h2>
            <ServiceList />
          </div>
        </main>

        <Footer />
      </div>

      <div className="mb-8 text-neutral-500 text-[10px] uppercase tracking-[0.5em] font-bold no-print">
        Official Document View
      </div>
    </div>
  );
};

export default App;
