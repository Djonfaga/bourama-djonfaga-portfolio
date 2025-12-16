import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <div className="text-sm font-semibold uppercase tracking-wide text-primary">
              Energy Systems Engineer
            </div>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Bourama</span>
              <span className="block text-primary">Djonfaga</span>
            </h1>
            <p className="mt-6 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Specializing in renewable energy, solar, and hydrogen systems. 
              Gazi University Graduate Student. Autonomous, multilingual, and committed to advancing the renewable energy sector.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl"
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/resume.pdf" // Placeholder for actual resume path
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors md:py-4 md:text-lg md:px-10"
                >
                  Download CV
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                {/* Placeholder for Profile Image */}
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 relative flex items-center justify-center h-96">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                   <span className="text-gray-400 font-medium text-lg">Profile Image Placeholder</span>
                   {/* In a real scenario, we'd use <img src="..." /> here */}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
