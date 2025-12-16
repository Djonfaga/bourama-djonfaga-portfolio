import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
            Engineer grounded in research <br className="hidden md:block" /> and field execution
          </h2>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            Accomplished Energy Systems Engineer currently pursuing a funded M.Sc. at Gazi University (3.81/4) 
            after graduating with honors from Necmettin Erbakan University. I blend lab research on solar cell 
            materials with real-world solar PV and HVAC projects, bringing creative problem-solving and 
            autonomous execution to every challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
            <ul className="space-y-3 text-muted">
              <li>
                <strong className="text-white">M.Sc., Energy Systems Engineering</strong><br/>
                Gazi University, 2024-Present (3.81/4)
              </li>
              <li>
                <strong className="text-white">B.Sc., Energy Systems Engineering</strong><br/>
                Necmettin Erbakan University, 2020-2024 (3.39/4), Honors
              </li>
              <li>
                <strong className="text-white">Scholarship:</strong> Turkiye Burslari (Full Ride)
              </li>
            </ul>
          </motion.div>

          <div className="space-y-6">
             <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white">Value Proposition</h3>
              </div>
              <ul className="space-y-2 text-muted list-disc list-inside">
                <li>Solar power plant design & commissioning</li>
                <li>Material research for high-efficiency cells</li>
                <li>Multidisciplinary teamwork (TEKNOFEST EV)</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Global Perspective</h3>
              </div>
              <p className="text-muted">
                Multilingual professional fluent in French (Native), English (C1), Turkish (C1), and Bambara. 
                Experienced in cross-cultural collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;