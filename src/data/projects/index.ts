import ekosafe from './EkoSafe_B101.js';
import quiknom from './Quiknom_Entrepreneurship.js';
import foldingTable from './FoldingCabinetTable_E262.js';
import pythonVision from './Python3DVision_Personal.js';
import cprex from './CPRex_Hardware.js';
import communityCabinet from './SmartCommunityCabinet_FYP.js';
import seamCarving from './SeamCarving_AlgorithmAnalysis.js';
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


export const gameProjects: Project[] = [project0, project2, project3];
export const softwareProjects: Project[] = [project1, pythonVision, seamCarving];


export const hardwareProjects: Project[] = [cprex, communityCabinet];



export const designProjects: Project[] = [foldingTable];


export const entrepreneurshipProjects: Project[] = [quiknom, ekosafe];


