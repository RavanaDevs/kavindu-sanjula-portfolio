'use client';

import { Button } from '@/components/ui/button';
import type { SkillCategory } from './skills-data';

interface SkillFilterProps {
  selectedCategory: SkillCategory | 'all';
  onCategoryChange: (category: SkillCategory | 'all') => void;
}

export function SkillFilter({ selectedCategory, onCategoryChange }: SkillFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
      >
        All
      </Button>
      <Button
        variant={selectedCategory === 'development' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('development')}
      >
        Development
      </Button>
      <Button
        variant={selectedCategory === 'cloud' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('cloud')}
      >
        Cloud
      </Button>
      <Button
        variant={selectedCategory === 'tools' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('tools')}
      >
        Tools
      </Button>
    </div>
  );
}