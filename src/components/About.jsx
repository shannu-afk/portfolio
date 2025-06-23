import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text"
        >
          About Me
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Professional Summary</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              B.Tech student specializing in Artificial Intelligence and Machine Learning with hands-on experience in Full-Stack Development and Python-based projects. Proven ability to build scalable web applications, integrate AI models, and deliver real-world solutions. Completed multiple internships in Python and Full-Stack domains, showcasing strong problem-solving, adaptability, and collaboration skills. Passionate about creating intelligent, user-centric applications that merge technology with innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-gray-300">kodalishanmukh6thfinger@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400" size={20} />
                  <span className="text-gray-300">+91 9550269156</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-gray-300">Vijayawada, Andhra Pradesh 520004</span>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-400">Education</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-blue-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">B.Tech in Artificial Intelligence and Machine Learning (AIML)</h4>
                    <p className="text-gray-300">NRI Institute of Technology</p>
                    <p className="text-sm text-gray-400">Jan 2022 - Jan 2026 • Pothavarappadu, India</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md text-sm">
                      CGPA: 8.5
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-blue-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Class-XII (MPC)</h4>
                    <p className="text-gray-300">Sri Chaitanya Intermediate College</p>
                    <p className="text-sm text-gray-400">Jan 2021 - Jan 2022 • Vijayawada, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-blue-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Class-X</h4>
                    <p className="text-gray-300">Sri Chaitanya School</p>
                    <p className="text-sm text-gray-400">Jan 2019 - Jan 2020 • Vijayawada, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 card"
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">Languages Known</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-white">Telugu</h4>
                <p className="text-gray-300">Native (Read, Write, Speak)</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white">English</h4>
                <p className="text-gray-300">Fluent (Read, Write, Speak)</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white">Hindi</h4>
                <p className="text-gray-300">Basic (Read, Understand)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;