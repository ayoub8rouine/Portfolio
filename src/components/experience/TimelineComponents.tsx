import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { TimelineItemProps, HighlightsProps, TechnologiesProps } from '../../types/experience';

const TimelineDot: React.FC = () => (
  <div className="absolute left-8 w-4 h-4 bg-white border-4 border-blue-600 rounded-full md:left-1/2 md:transform md:-translate-x-1/2 z-10" />
);

const Highlights: React.FC<HighlightsProps> = ({ items }) => (
  <div className="mb-4">
    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
    <ul className="space-y-2">
      {items.map((highlight: string, index: number) => (
        <li key={index} className="flex items-start">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Technologies: React.FC<TechnologiesProps> = ({ items }) => (
  <div>
    <h5 className="font-semibold text-gray-900 mb-2">Technologies Used:</h5>
    <div className="flex flex-wrap gap-2">
      {items.map((tech: string, index: number) => (
        <span
          key={index}
          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, isEven }) => {
  const containerClasses = `relative flex items-center mb-12 ${
    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
  }`;

  const contentClasses = `bg-white rounded-lg shadow-lg p-6 ml-16 md:ml-0 md:w-5/12 ${
    isEven ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
  } hover:shadow-xl transition-all duration-300 transform hover:scale-105`;

  return (
    <AnimatedSection animation="slide-up">
      <div className={containerClasses}>
        <TimelineDot />
        <div className={contentClasses}>
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

          <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
          <Highlights items={experience.highlights} />
          <Technologies items={experience.technologies} />
        </div>
      </div>
    </AnimatedSection>
  );
};

export { TimelineItem, Highlights, Technologies };