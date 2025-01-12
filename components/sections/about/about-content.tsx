'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Who I Am</h3>
        <div className="space-y-4 text-muted-foreground">
          <p>
            {"I'm a Software Developer, Game Developer, and Cloud Engineer with a passion for creating innovative solutions that make a difference."}
          </p>
          <p>
            With expertise in full-stack development, cloud architecture, and game development, I bring a unique perspective to every project.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating intuitive user experiences that delight users.
          </p>
        </div>
        <Button className="mt-6">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold">What I Do</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-semibold mb-2">Software Development</h4>
            <p className="text-muted-foreground">Building scalable web applications using modern technologies</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-semibold mb-2">Game Development</h4>
            <p className="text-muted-foreground">Creating immersive gaming experiences with Unity and Unreal Engine</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <h4 className="font-semibold mb-2">Cloud Engineering</h4>
            <p className="text-muted-foreground">Designing and implementing robust cloud infrastructure solutions</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}