import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Zap, Settings, Sun, Layers, PenTool, Truck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TÜBİTAK 122M311',
      description: 'Environmentally friendly aluminum paste for PERC, TOPCon & IBC solar cells; focused on conductivity and adhesion.',
      tags: ['Materials', 'Process', 'Testing'],
      icon: <Layers className="h-8 w-8 text-primary" />,
      gradient: "from-primary/20 to-blue-500/20"
    },
    {
      title: '5 MW Solar Simulation',
      description: 'Designed and simulated grid-scale plant layouts; evaluated performance and yield using AutoCAD and SAM.',
      tags: ['Utility-scale', 'SAM', 'AutoCAD'],
      icon: <Sun className="h-8 w-8 text-secondary" />,
      gradient: "from-secondary/20 to-orange-500/20"
    },
    {
      title: 'Obstacle-Avoiding Robot',
      description: 'Designed and built an autonomous robot capable of detecting and avoiding obstacles using SolidWorks, Arduino, and MATLAB.',
      tags: ['Arduino', 'MATLAB', 'Robotics'],
      icon: <Settings className="h-8 w-8 text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: 'Rooftop Solar Systems',
      description: 'Design and simulation of 10 kW On-Grid and Off-Grid rooftop solar energy systems.',
      tags: ['Residential', 'Off-Grid', 'AutoCAD'],
      icon: <Sun className="h-8 w-8 text-orange-400" />,
      gradient: "from-orange-400/20 to-red-400/20"
    },
    {
      title: 'Electric Vehicle Design',
      description: 'Y-GT TEKNOFEST Electric Car Challenge: Designed, modelled, and built an electric car for the national competition.',
      tags: ['TEKNOFEST', 'EV', 'Teamwork'],
      icon: <Truck className="h-8 w-8 text-blue-400" />,
      gradient: "from-blue-400/20 to-cyan-400/20"
    },
    {
      title: 'Building Energy Audit',
      description: 'Comprehensive energy audit and analysis for building efficiency optimization.',
      tags: ['Efficiency', 'Audit', 'Analysis'],
      icon: <PenTool className="h-8 w-8 text-emerald-400" />,
      gradient: "from-emerald-400/20 to-green-400/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark font-display">Selected work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-card border border-primary/20 shadow-lg shadow-gray-200/50 hover:border-secondary/50 transition-all duration-300 flex flex-col"
            >
              {/* Visual Placeholder Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                <div className="p-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-muted bg-gray-100 border border-gray-200 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;