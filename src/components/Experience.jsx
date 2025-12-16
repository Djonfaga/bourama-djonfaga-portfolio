import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Researcher',
      company: 'Science and Technology Research Center (NEU BİTAM)',
      location: 'Konya, Turkiye',
      period: 'October 2023 – October 2024',
      description: 'Served as a researcher on the TÜBİTAK project titled “Development of Aluminum Paste for Back Surface Contact of Solar Cells”. Formulated and tested various pastes composed of different material combinations, including silver and aluminum.'
    },
    {
      role: 'HVAC Systems Intern Engineer',
      company: 'Teksan Sogutma',
      location: 'Konya, Turkiye',
      period: 'July 2024 – August 2024',
      description: 'Contributed to the design and commissioning of HVAC systems and cold rooms.'
    },
    {
      role: 'Solar Design and Installation Intern',
      company: 'Neva Solar Inc.',
      location: 'Konya, Turkiye',
      period: 'July 2023 – August 2023',
      description: 'Designed and installed solar power plants (on-grid, off-grid) and solar streetlights. Gained hands-on experience in system optimization, AutoCAD, and SolidWorks.'
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">Professional Experience</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                    <div className={`${index % 2 === 0 ? 'md:text-left md:pl-12 md:pr-0' : ''}`}>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <div className="text-primary font-medium mb-1">{exp.company}</div>
                      <div className="text-sm text-gray-500 mb-2 flex items-center md:justify-end gap-2">
                        {index % 2 === 0 ? (
                           <span className="flex items-center gap-1 md:flex-row-reverse">
                             {exp.period}
                           </span>
                        ) : (
                            <span className="flex items-center gap-1">
                             {exp.period}
                           </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-lg shadow-sm border border-slate-100 inline-block text-left">
                        {exp.description}
                      </p>
                    </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
