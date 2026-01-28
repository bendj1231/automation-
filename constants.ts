
import { ServiceType, ServiceInfo } from './types';

export const SERVICES_DATA: Record<ServiceType, ServiceInfo> = {
  [ServiceType.AUTOMATION]: {
    type: ServiceType.AUTOMATION,
    title: 'Automation',
    description: 'Transitioning manual heavy tasked business related or personal works into automation such as invoices, time sheets, sales proposals, networking and more.',
    longDescription: 'Our automation solutions are designed to reclaim your time. We analyze your repetitive tasks and implement robust digital workers that handle everything from data entry to complex document generation with 100% accuracy.',
    icon: '⚙️',
    color: 'blue',
    features: ['Auto-Invoicing', 'Timesheet Management', 'Proposal Generation', 'Network Automation'],
    imageUrl: 'https://picsum.photos/seed/automation/800/600'
  },
  [ServiceType.WORKFLOW]: {
    type: ServiceType.WORKFLOW,
    title: 'Workflow',
    description: 'Enhancing your personal or cooperative workflow through time management, and coordination within various applications.',
    longDescription: 'A smooth workflow is the backbone of any successful enterprise. We integrate your existing tools (SaaS, internal systems, communications) into a unified stream that eliminates bottlenecks and fosters seamless collaboration.',
    icon: '🔄',
    color: 'emerald',
    features: ['App Integration', 'Team Coordination', 'Time Management', 'Process Optimization'],
    imageUrl: 'https://picsum.photos/seed/workflow/800/600'
  },
  [ServiceType.DIAGNOSTICS]: {
    type: ServiceType.DIAGNOSTICS,
    title: 'Diagnostics',
    description: 'Providing assessed diagnostics through consultation gathering works to be done.',
    longDescription: 'Before you can improve, you must understand. Our diagnostics service provides a high-fidelity map of your current operations, identifying hidden inefficiencies and prescribing precise remedies for long-term growth.',
    icon: '📊',
    color: 'cyan',
    features: ['Operational Audits', 'Efficiency Scoring', 'Gap Analysis', 'Future-State Roadmap'],
    imageUrl: 'https://picsum.photos/seed/diagnostics/800/600'
  }
};
