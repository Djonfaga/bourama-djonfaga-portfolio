import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Sun } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Environmentally Friendly Aluminum Paste',
      category: 'Research & Development',
      description: 'TÜBİTAK 122M311: Development of Aluminum Paste for Back Surface Contact of PERC, TOPCON & IBC Solar Cells.',
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      tags: ['Solar Cells', 'Materials Science', 'TÜBİTAK']
    },
    {
      title: '5 MW Solar Power Plant Design',
      category: 'Design & Simulation',
      description: 'Complete design and simulation of a large-scale solar power plant using AutoCAD and SAM (System Advisor Model).',
      icon: <Zap className="h-6 w-6 text-primary" />,
      tags: ['AutoCAD', 'SAM', 'Large Scale']
    },
    {
      title: 'Obstacle-Avoiding Robot',
      category: 'Robotics',
      description: 'Designed and built an autonomous robot capable of detecting and avoiding obstacles using SolidWorks, Arduino, and MATLAB.',
      icon: <Settings className="h-6 w-6 text-slate-600" />,
      tags: ['Arduino', 'MATLAB', 'SolidWorks', 'Robotics']
    },
    {
      title: 'Rooftop Solar Systems (On/Off-Grid)',
      category: 'Design',
      description: 'Design and simulation of 10 kW On-Grid and Off-Grid rooftop solar energy systems.',
      icon: <Sun className="h-6 w-6 text-orange-500" />,
      tags: ['Residential', 'Off-Grid', 'AutoCAD']
    },
    {
      title: 'Electric Vehicle Design',
      category: 'Automotive',
      description: 'Y-GT TEKNOFEST Electric Car Challenge: Designed, modelled, and built an electric car for the national competition.',
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      tags: ['TEKNOFEST', 'EV', 'Teamwork']
    }
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {project.icon}
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              </div>
              <div className="px-6 pb-6 pt-0 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
