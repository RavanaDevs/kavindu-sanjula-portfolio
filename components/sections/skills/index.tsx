'use client';

import { motion } from 'framer-motion';
import { SkillCard } from './skill-card';
import { SkillFilter } from './skill-filter';
import { useState } from 'react';
import { skillsData, SkillCategory } from './skills-data';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>

        <SkillFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}