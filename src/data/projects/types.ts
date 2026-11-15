export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  role: string;
  leadership?: boolean;
  solo?: boolean;
  team: string;
  status: string;
  grade?: string;
  award?: string;
  period?: string;
  overview: string;
  contributions: string[];
  technologies: string;
  spotlight: { title: string; approach: string; takeaway: string };
  cover: string;
  media: { title: string; kind: 'Image' | 'Video'; brief: string }[];
  github?: string;
}
