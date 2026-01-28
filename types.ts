
export enum ServiceType {
  AUTOMATION = 'Automation',
  WORKFLOW = 'Workflow',
  DIAGNOSTICS = 'Diagnostics'
}

export interface ServiceInfo {
  type: ServiceType;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  features: string[];
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
