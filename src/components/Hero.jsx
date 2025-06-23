import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">Shanmukh Chowdary Kodali</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-6"
            >
              AI-Driven Full-Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed"
            >
              B.Tech student specializing in Artificial Intelligence and Machine Learning with hands-on experience in Full-Stack Development and Python-based projects. Passionate about creating intelligent, user-centric applications that merge technology with innovation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-lg font-medium border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex space-x-6"
            >
              <a
                href="https://github.com/shannu-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/shanmukh-chowdary-kodali-b4462526a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:kodalishanmukh6thfinger@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={32} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotateY: 360,
                  rotateX: 360 
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-80 h-80 relative"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-4 rounded-full bg-slate-800 border-2 border-blue-500/50 flex items-center justify-center">
                  <span className="text-6xl font-bold gradient-text">KSC</span>
                </div>
              </motion.div>
              
              {/* Floating rings */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`absolute inset-0 rounded-full border-2 border-opacity-30 ${
                    i === 0 ? 'border-blue-400 scale-110' :
                    i === 1 ? 'border-emerald-400 scale-125' :
                    i === 2 ? 'border-purple-400 scale-140' :
                    'border-pink-400 scale-155'
                  }`}
                  style={{
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;