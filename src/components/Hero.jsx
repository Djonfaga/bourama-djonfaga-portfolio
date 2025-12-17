import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 min-h-screen flex items-center bg-mesh bg-fixed bg-no-repeat bg-cover">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <Motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Renewable Energy | Solar | Hydrogen</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 font-display">
              Bourama <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Djonfaga</span>
            </h1>
            
            <p className="text-lg text-muted mb-8 max-w-xl leading-relaxed">
              Energy Systems Engineer and Gazi University M.Sc. candidate focused on solar cell materials, 
              grid-scale solar plants, and efficient HVAC solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-dark bg-primary hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,215,168,0.3)] hover:shadow-[0_0_30px_rgba(16,215,168,0.5)] transform hover:-translate-y-1"
              >
                See my work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/resume.pdf" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-base font-semibold rounded-xl text-white bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <span className="block text-2xl font-bold text-white mb-1">4+ Years</span>
                <span className="text-sm text-muted">Academic & project experience</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <span className="block text-2xl font-bold text-white mb-1">Hands-on</span>
                <span className="text-sm text-muted">Solar Design & Install</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <span className="block text-2xl font-bold text-white mb-1">Multi-lingual</span>
                <span className="text-sm text-muted">FR, EN, TR, BAM</span>
              </div>
            </div>
          </Motion.div>
          
          {/* Right Content - Profile & Focus Card */}
          <Motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 mt-12 lg:mt-0 space-y-6"
          >
            {/* Profile Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-10"></div>
              <img 
                src="/profile.jpg" 
                alt="Bourama Djonfaga" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white font-bold text-lg">Bourama Djonfaga</p>
                <p className="text-primary text-sm">Energy Systems Engineer</p>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="p-6 rounded-2xl bg-[#0b1626]/80 border border-white/10 backdrop-blur-md shadow-xl">
               <div className="flex items-center gap-2 mb-3">
                 <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
                 <span className="text-xs font-bold uppercase tracking-wider text-secondary">Current Focus</span>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Graduate Researcher</h3>
               <p className="text-muted text-sm mb-4">
                 Developing aluminum pastes for solar cells (TÜBİTAK 122M311) at NEU BİTAM.
               </p>
               <div className="flex flex-wrap gap-2 mb-4">
                 {['Solar Materials', 'Process Optimization', 'R&D'].map(tag => (
                   <span key={tag} className="px-2 py-1 text-xs rounded bg-white/5 text-muted border border-white/5">
                     {tag}
                   </span>
                 ))}
               </div>
               <div className="space-y-2 pt-4 border-t border-white/5">
                 <div className="flex items-center text-sm text-muted">
                   <MapPin className="w-4 h-4 mr-2 text-primary" />
                   Ankara, Turkiye
                 </div>
                 <div className="flex items-center text-sm text-muted">
                   <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                   Open to energy & sustainability roles
                 </div>
               </div>
            </div>

          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;