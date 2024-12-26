'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';
import { ProjectFilter } from './project-filter';
import { useState } from 'react';
import { projectsData, ProjectCategory } from './projects-data';

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Showcasing some of my best work and technical achievements
          </p>
        </motion.div>

        <ProjectFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}