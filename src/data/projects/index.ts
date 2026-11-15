import project0 from './OutOfMemory_GAM200.js';
import project1 from './EvFleetSimulator_GAM300.js';
import project2 from './ViralInvaders_GAM150.js';
import project3 from './ChaiAndChain_GAM100.js';

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  role: string;
  team: string;
  status: string;
  period?: string;
  overview: string;
  contributions: string[];
  technologies: string;
  spotlight: { title: string; approach: string; takeaway: string };
  cover: string;
  media: { title: string; kind: 'Image' | 'Video'; brief: string }[];
  github?: string;
}


export const projects: Project[] = [project0, project1, project2, project3];
