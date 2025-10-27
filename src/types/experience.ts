export interface Experience {
  id: string | number;
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface TimelineItemProps {
  experience: Experience;
  isEven: boolean;
}

export interface HighlightsProps {
  items: string[];
}

export interface TechnologiesProps {
  items: string[];
}