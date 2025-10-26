export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  category: string;
  duration: string;
  company: string;
  role: string;
  achievements: string[];
  challenges: string[];
  results: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  icon: string;
  iconColor: string;
}

