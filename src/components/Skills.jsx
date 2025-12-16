import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    "Engineering & Design": ["MATLAB & Simulink", "SolidWorks", "Fusion 360", "AutoCAD", "EES (Engineering Equation Solver)"],
    "Renewable Energy Simulation": ["SAM (System Advisor Model)", "PvSyst", "Sunny Design", "ZetaCAD"],
    "Programming & IT": ["Python (Zero to Advanced)", "Linux CLI", "VASP", "Microsoft 365"],
    "Languages & Soft Skills": ["French (Native)", "English (C1)", "Turkish (C1)", "Team Spirit", "Autonomous"]
  };

  return (
    <section id="skills" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Technical Competencies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
