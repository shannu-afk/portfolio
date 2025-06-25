import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text"
        >
          Certifications
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* INFOSYS SPRINGBOARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Award className="text-blue-400" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">INFOSYS SPRINGBOARD</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>May 2024</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I have completed multiple certifications in Infosys Springboard, enhancing my expertise in various domains of technology. These certifications validate my knowledge and hands-on experience in key programming languages and AI advancements.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Python', 'AI/ML', 'Web Development', 'Data Structures', 'Algorithms'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* OpenCV Bootcamp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Award className="text-blue-400" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">OpenCV University Bootcamp</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>June 2025</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Successfully completed the OpenCV Bootcamp offered by OpenCV University, gaining hands-on experience in computer vision and image processing with real-time applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://courses.opencv.org/courses/course-v1:OpenCV+Bootcamp+CV0/course/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['OpenCV', 'Computer Vision', 'Python', 'Image Processing'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* IBM SkillBuild */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Award className="text-blue-400" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">IBM SkillBuild – AI Agents</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>June 2025</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Completed the IBM SkillBuild certification "Unleashing the Power of AI Agents," exploring how AI agents function and how they can be applied across industries to automate and enhance decision-making processes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://skills.yourlearning.ibm.com/activity/ALM-COURSE_3825456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['AI Agents', 'Automation', 'Decision Systems', 'IBM SkillBuild'].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
