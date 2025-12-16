import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            A driven Energy Systems Engineer with a passion for sustainable solutions.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Education</h3>
              <p className="mt-2 text-gray-600">
                Currently pursuing a Master's in Energy Systems Engineering at Gazi University (GPA 3.81/4). 
                Graduated with Honors from Necmettin Erbakan University (GPA 3.39/4).
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Achievements</h3>
              <p className="mt-2 text-gray-600">
                Recipient of the prestigious "Turkiye Burslari" Full Scholarship for both Bachelor's and Master's degrees. 
                Active researcher on TÜBİTAK-funded solar cell projects.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Global Perspective</h3>
              <p className="mt-2 text-gray-600">
                Multilingual professional fluent in French (Native), English (C1), and Turkish (C1). 
                Experienced in international student associations and cross-cultural teamwork.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
