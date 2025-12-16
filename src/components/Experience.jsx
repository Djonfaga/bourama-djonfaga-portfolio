import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Researcher',
      company: 'NEU BİTAM',
      date: 'Oct 2023 – Oct 2024',
      description: 'Developed aluminum pastes for solar cells (TÜBİTAK project), testing silver/aluminum combinations to improve back surface contacts and efficiency.'
    },
    {
      role: 'HVAC Systems Intern Engineer',
      company: 'Teksan Sogutma',
      date: 'Jul 2024 – Aug 2024',
      description: 'Contributed to design and commissioning of HVAC systems and cold rooms, aligning performance with client requirements.'
    },
    {
      role: 'Solar Design & Installation Intern',
      company: 'Neva Solar Inc.',
      date: 'Jul 2023 – Aug 2023',
      description: 'Designed and installed on-grid/off-grid solar plants and solar streetlights; optimized systems using AutoCAD, SAM, and SolidWorks.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Experience</p>
           <h2 className="text-3xl md:text-4xl font-bold text-white font-display">Recent roles and impact</h2>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted whitespace-nowrap">
                  {exp.date}
                </div>
              </div>
              <p className="text-muted leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;