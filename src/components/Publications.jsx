import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'A FIRST-PRINCIPLES INVESTIGATION OF THE STRUCTURAL, ELECTRONIC, AND OPTICAL PROPERTIES OF THE 2D SiCl MATERIAL',
      conference: 'International World Energy Conference',
      role: 'Conference Attended & Article',
      description: 'Presented research on the structural, electronic, and optical properties of 2D SiCl material using first-principles calculations.'
    }
  ];

  return (
    <section id="publications" className="py-20 bg-darker">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Publications</p>
           <h2 className="text-3xl md:text-4xl font-bold text-dark font-display">Academic Contributions</h2>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-primary/20 shadow-lg shadow-gray-200/50 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">{pub.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark leading-tight mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-lg text-muted font-medium">
                      {pub.conference}
                    </p>
                  </div>
                </div>
                {/* <p className="text-muted leading-relaxed">
                  {pub.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
