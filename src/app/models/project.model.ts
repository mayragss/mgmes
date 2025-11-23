export interface Project {
  id: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

