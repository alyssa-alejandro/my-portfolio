export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  summary?: string;
  highlights?: string[];
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
  coverImage?: string;
  coverAlt?: string;
  media: { title: string; kind: 'Image' | 'Video'; brief: string; youtubeId?: string; src?: string; alt?: string; images?: { src: string; alt: string; label: string }[] }[];
  github?: string;
}
