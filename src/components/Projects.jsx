import React from 'react';
import { motion } from 'framer-motion';
import { Github, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BUS RESERVATION SYSTEM",
      duration: "Jan 2019 - Dec 2019",
      location: "Vijayawada, India",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      description: "Developed a Bus Reservation System with Django, implementing secure login and seamless booking functionalities. Enhanced user experience through an intuitive UI and responsive design for smooth navigation. Integrated Django admin panel for efficient management of buses, schedules, and user bookings.",
      image: "https://www.justrechargeit.com/bus/images/jri_bus_offer_banner.jpg",
      github: "https://github.com/shannu-afk/Bus_Reservation"
    },
    {
      title: "AMAZON WEBSCRAPER",
      duration: "Nov 2024 - Dec 2024",
      location: "Vijayawada, India",
      technologies: ["Python", "BeautifulSoup", "Scrapy", "Data Processing"],
      description: "Developed an Amazon Scraper tool using Python and integrated libraries BeautifulSoup and Scrapy to automate the extraction of product information including details, prices, ratings, and reviews. Engineered efficient web scraping logic that optimized data retrieval time by 30%, ensuring swift and reliable data processing.",
      image: "https://media.brightdata.com/2021/09/og-20.svg",
      github: "https://github.com/shannu-afk/Amazon_Scraper"
    },
    {
      title: "LOCAL CHATBOT WITH VOICE AND FILE UPLOAD",
      duration: "Jun 2025 - Jun 2025",
      location: "Vijayawada, India",
      technologies: ["Python", "Flask", "JavaScript", "HTML", "Ollama", "Mistral", "PyMuPDF", "SpeechRecognition"],
      description: "Built a local ChatGPT-like chatbot using Flask and Ollama with the Mistral model. Features include PDF/text file upload for knowledge-based responses, voice command support, and a clean responsive interface. Enables offline conversational AI with personalized document querying.",
      image: "https://framerusercontent.com/images/g0YTRh7uRHpbWQgSZz62bO050.png",
      github: "https://github.com/shannu-afk/Local-Chatbot"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-col space-y-1 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/shannu-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition-colors"
          >
            View More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
