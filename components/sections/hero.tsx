'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import ParticlesContainer from '../particles-container';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesContainer />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {"Hi, I'm "}
              <span className="text-primary">Kavindu Sanjula</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Developer • Game Developer • Cloud Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="min-w-[200px]">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="text-muted-foreground text-sm"
        >
          Scroll down to explore
        </motion.div>
      </div>
    </section>
  );
}