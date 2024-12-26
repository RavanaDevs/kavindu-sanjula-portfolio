'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Happy Clients', value: '30+' },
];

export function AboutStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center p-6 rounded-lg bg-muted/50"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}