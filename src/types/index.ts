export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  year?: string;
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  description: string;
}

export interface Club {
  name: string;
  role: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}