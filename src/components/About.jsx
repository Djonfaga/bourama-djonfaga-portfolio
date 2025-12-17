import React from 'react';
import { motion as Motion } from 'framer-motion';
import { BookOpen, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 font-display">
            Engineer grounded in research <br className="hidden md:block" /> and field execution
          </h2>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            Accomplished Energy Systems Engineer currently pursuing a funded M.Sc. at Gazi University (3.81/4) 
            after graduating with honors from Necmettin Erbakan University. I blend advanced computational research 
            for hydrogen storage and production, and smart grid and microgrid design with real-world engineering projects, 
            bringing creative problem-solving and autonomous execution to every challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-card border border-primary/20 shadow-lg shadow-gray-200/50 hover:border-primary/50 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-4">Education</h3>
            <ul className="space-y-3 text-muted">
              <li>
                <strong className="text-dark">M.Sc., Energy Systems Engineering</strong><br/>
                Gazi University, 2024-Present (3.81/4)
              </li>
              <li>
                <strong className="text-dark">B.Sc., Energy Systems Engineering</strong><br/>
                Necmettin Erbakan University, 2020-2024 (3.39/4), Honors
              </li>
              <li>
                <strong className="text-dark">Scholarship:</strong> Turkiye Burslari (Full Ride)
              </li>
            </ul>
          </Motion.div>

          <div className="space-y-6">
             <Motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-card border border-secondary/20 shadow-lg shadow-gray-200/50 hover:border-secondary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark">Value Proposition</h3>
              </div>
              <ul className="space-y-2 text-muted list-disc list-inside">
                <li>Solar power plant design & commissioning</li>
                <li>Computational modeling for Hydrogen Storage & Production</li>
                <li>Smart Grid & Microgrid Design</li>
                <li>Multidisciplinary teamwork (TEKNOFEST EV)</li>
              </ul>
            </Motion.div>

            <Motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-card border border-primary/20 shadow-lg shadow-gray-200/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-dark">Global Perspective</h3>
              </div>
              <p className="text-muted">
                Multilingual professional fluent in French (Native), English (C1), Turkish (C1), and Bambara. 
                Experienced in cross-cultural collaboration.
              </p>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;