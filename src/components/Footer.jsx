import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darker border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <p className="text-muted text-sm">
            Based in Ankara, Turkiye
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-sm text-muted">
            &copy; {new Date().getFullYear()} Bourama Djonfaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;