'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import type { Skill } from './skills-data';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <span className="text-lg font-bold text-muted-foreground">{skill.level}%</span>
        </div>
        <p className="text-sm text-muted-foreground">{skill.description}</p>
      </Card>
    </motion.div>
  );
}