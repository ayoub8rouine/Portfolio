import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional journey combining research excellence with industry innovation
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 md:left-1/2 md:transform md:-translate-x-1/2"></div>

            {experiences.map((experience, index) => (
              <AnimatedSection key={experience.id} animation="slide-up">
                <div className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-white border-4 border-blue-600 rounded-full md:left-1/2 md:transform md:-translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`bg-white rounded-lg shadow-lg p-6 ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                  } hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{experience.position}</h3>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.duration}
                      </span>
                    </div>

                    <div className="flex items-center text-blue-600 mb-3">
                      <h4 className="font-semibold mr-2">{experience.company}</h4>
                      <span className="text-gray-500 flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;