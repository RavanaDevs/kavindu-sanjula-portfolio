export type ProjectCategory = 'web' | 'game' | 'cloud';

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  github: string;
  demo: string;
}