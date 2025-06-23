import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 Shanmukh Chowdary Kodali. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/shannu-afk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shanmukh-chowdary-kodali-b4462526a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kodalishanmukh6thfinger@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-500 text-sm">
            Thank For Visiting My portfolio! If you have any questions or feedback,feel free to reach me out via email or contact me on social media.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;