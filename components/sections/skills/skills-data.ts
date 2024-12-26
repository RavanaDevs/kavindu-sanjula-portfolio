export type SkillCategory = 'development' | 'cloud' | 'tools';

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  description: string;
}

export const skillsData: Skill[] = [
  {
    name: 'React.js',
    level: 90,
    category: 'development',
    description: 'Building modern web applications with React and its ecosystem',
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'development',
    description: 'Server-side JavaScript development and API creation',
  },
  {
    name: 'AWS',
    level: 80,
    category: 'cloud',
    description: 'Cloud infrastructure and serverless architecture',
  },
  {
    name: 'Docker',
    level: 75,
    category: 'tools',
    description: 'Containerization and deployment automation',
  },
  {
    name: 'TypeScript',
    level: 85,
    category: 'development',
    description: 'Type-safe JavaScript development',
  },
  {
    name: 'Azure',
    level: 75,
    category: 'cloud',
    description: 'Microsoft cloud platform and services',
  },
  {
    name: 'Unity',
    level: 80,
    category: 'development',
    description: 'Game development and interactive experiences',
  },
  {
    name: 'Git',
    level: 85,
    category: 'tools',
    description: 'Version control and collaboration',
  },
  {
    name: 'Kubernetes',
    level: 70,
    category: 'cloud',
    description: 'Container orchestration and scaling',
  },
];