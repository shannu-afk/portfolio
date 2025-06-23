import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "PYTHON PROGRAMMING (Intern)",
      company: "Motioncut's (AICTE)",
      duration: "Oct 2024 - Nov 2024",
      location: "Lucknow (Remote), India",
      achievements: [
        "Completed 4 Python projects in 1 month, demonstrating fast learning and hands-on application of core concepts.",
        "Gained practical experience in dynamic web page design using Python and front-end technologies.",
        "Strengthened skills in Python development and VS Code, improving coding efficiency and project structure.",
        "Applied Python in real-world scenarios to build functional and user-friendly web components.",
        "Enhanced debugging and development workflow through effective use of VS Code extensions and tools."
      ]
    },
    {
      title: "FULL STACK DEVELOPER (INTERN)",
      company: "INNOMATICS RESEARCH LAB",
      duration: "Jan 2025 - Mar 2025",
      location: "Hyderabad (Remote), India",
      achievements: [
        "Developed a Budget Manager app using HTML, CSS, and JavaScript, enhancing user experience with responsive design.",
        "Cloned the Innomatics website, optimizing HTML and CSS for 20% faster loading times.",
        "Built a basic online coffee shop with Flask and C#, integrating backend for smooth transactions and data management.",
        "Collaborated in a cross-functional team to plan and execute full-stack features, improving project delivery speed."
      ]
    },
    {
      title: "PYTHON PROGRAMMING (INTERN)",
      company: "BlackBucks Private LT",
      duration: "Jan 2025 - May 2025",
      location: "Hyderabad (Remote), India",
      achievements: [
        "Built and optimized Python applications, enhancing performance and reducing execution time by 25%.",
        "Secured top scores in advanced Python assessments, showcasing strong coding proficiency and problem-solving skills.",
        "Delivered efficient, real-world Python solutions during internship at BlackBucks Pvt Ltd, improving overall system reliability.",
        "Collaborated on team-based Python projects, contributing to clean, maintainable code and streamlined development workflows."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-20 pb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full border-4 border-slate-900"></div>

                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                      <p className="text-lg text-white font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;