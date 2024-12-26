'use client';

import { motion } from 'framer-motion';
import { AboutStats } from './about-stats';
import { AboutContent } from './about-content';
import { AboutTimeline } from './about-timeline';

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Passionate about crafting exceptional digital experiences through code
          </p>
        </motion.div>

        <AboutContent />
        <AboutStats />
        <AboutTimeline />
      </div>
    </section>
  );
}