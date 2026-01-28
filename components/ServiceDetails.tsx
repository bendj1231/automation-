
import React from 'react';
import { ServiceType } from '../types';
import { SERVICES_DATA } from '../constants';

interface ServiceDetailsProps {
  activeService: ServiceType | null;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ activeService }) => {
  const services = Object.values(SERVICES_DATA);

  return (
    <div className="space-y-12">
      {services.map((service) => {
        const isActive = activeService === service.type;
        return (
          <div 
            key={service.type}
            className={`p-10 border-l-4 transition-all duration-500 ${
              isActive 
                ? 'bg-neutral-50 border-blue-500 translate-x-2' 
                : 'bg-white border-neutral-100'
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-2 block">
                  Capability Pillar 0{services.indexOf(service) + 1}
                </span>
                <h3 className="text-3xl font-black text-black uppercase tracking-tighter">{service.title}</h3>
              </div>
              <div className="text-4xl filter grayscale group-hover:grayscale-0">{service.icon}</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-neutral-600 leading-relaxed font-medium">
                  {service.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map(f => (
                    <span key={f} className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-neutral-100 p-6 flex flex-col justify-center">
                 <p className="text-[10px] font-black text-neutral-400 uppercase mb-4 tracking-widest">Direct Impact</p>
                 <p className="text-sm text-black italic leading-relaxed">
                   "{service.description}"
                 </p>
                 <button className="mt-6 self-start text-xs font-black border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors uppercase tracking-widest">
                   Request Briefing
                 </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceDetails;