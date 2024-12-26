'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2023',
    title: 'Senior Software Developer',
    company: 'Tech Corp',
    description: 'Leading development of enterprise applications',
  },
  {
    year: '2021',
    title: 'Cloud Engineer',
    company: 'Cloud Solutions Inc',
    description: 'Architecting cloud infrastructure and implementing DevOps practices',
  },
  {
    year: '2019',
    title: 'Game Developer',
    company: 'Game Studio',
    description: 'Developing immersive gaming experiences',
  },
];

export function AboutTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center mb-12">My Journey</h3>
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="relative pl-8 border-l-2 border-primary/20"
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
            <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <div className="text-sm text-muted-foreground mb-2">{item.company}</div>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}