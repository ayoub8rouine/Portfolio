import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { TimelineItem } from '../components/experience/TimelineComponents';
import { experiences } from '../data/portfolio';
import { Experience as ExperienceType } from '../types/experience';

/**
 * Experience Section Component
 * 
 * Displays a timeline of professional experiences with alternating layout
 * and smooth animations. Each experience entry includes position, company,
 * duration, location, description, key achievements, and technologies used.
 */
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
            {/* Timeline vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 md:left-1/2 md:transform md:-translate-x-1/2" />

            {/* Experience timeline items */}
            {experiences.map((experience: ExperienceType, index: number) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;