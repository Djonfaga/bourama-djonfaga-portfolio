import React from 'react';
import { motion as Motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Modeling & Analysis",
      skills: ["MATLAB & Simulink", "SAM (System Advisor Model)", "EES", "VASP"]
    },
    {
      title: "Design & CAD",
      skills: ["SolidWorks", "Fusion 360", "AutoCAD", "ZetaCAD", "PvSyst", "Sunny Design"]
    },
    {
      title: "Software & Mindset",
      skills: ["Python (Advanced)", "Linux CLI", "Team Spirit", "Creativity", "Perseverance", "Autonomous"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
            Tools, technologies, and strengths
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-muted text-sm border border-white/5 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;