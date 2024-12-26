'use client';

import { Button } from '@/components/ui/button';
import type { ProjectCategory } from './projects-data';

interface ProjectFilterProps {
  selectedCategory: ProjectCategory | 'all';
  onCategoryChange: (category: ProjectCategory | 'all') => void;
}

export function ProjectFilter({ selectedCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
      >
        All
      </Button>
      <Button
        variant={selectedCategory === 'web' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('web')}
      >
        Web
      </Button>
      <Button
        variant={selectedCategory === 'game' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('game')}
      >
        Game
      </Button>
      <Button
        variant={selectedCategory === 'cloud' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('cloud')}
      >
        Cloud
      </Button>
    </div>
  );
}