import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Tech Skills",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        "Python, JavaScript, HTML, CSS, C",
        "Flask, Django, React, Node.js",
        "TensorFlow, Keras",
        "MongoDB, PostgreSQL, MySQL, GitHub, REST APIs"
      ],
      proficiency: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Django", level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-emerald-400" size={24} />,
      skills: [
        "Problem-Solving",
        "Critical Thinking",
        "Adaptability",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Creativity",
        "Continuous Learning"
      ],
      proficiency: [
        { name: "Problem-Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Adaptability", level: 92 }
      ]
    },
    {
      title: "Languages Known",
      icon: <Globe className="text-purple-400" size={24} />,
      skills: [
        "Telugu – Native (Read, Write, Speak)",
        "English – Fluent (Read, Write, Speak)",
        "Hindi – Basic (Read, Understand)"
      ],
      proficiency: [
        { name: "Telugu", level: 100 },
        { name: "English", level: 90 },
        { name: "Hindi", level: 60 }
      ]
    }
  ];

  const SkillBar = ({ skill, delay = 0 }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
          className="h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold ml-3 text-white">{category.title}</h3>
              </div>

              <div className="space-y-4 mb-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Proficiency Levels</h4>
                {category.proficiency.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} delay={skillIndex * 0.1} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;