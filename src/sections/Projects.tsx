import React from 'react';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative AI solutions combining cutting-edge technology with real-world applications
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} animation="slide-up">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 mr-3">{project.title}</h3>
                      <span className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                    Key Features & Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Details
                  </button>
                  <button className="flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                    <Github className="w-5 h-5 mr-2" />
                    Source Code
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Projects Note */}
        <AnimatedSection>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Interested in more projects? Check out my GitHub for additional work including competitive programming solutions, 
              research implementations, and open-source contributions.
            </p>
            <a
              href="https://github.com/ayoub8rouine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;