import React from 'react';
import { Code, Brain, Smartphone, Database, Settings, Target } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const iconMap = {
    'Programming Languages': Code,
    'AI & Machine Learning': Brain,
    'Web Development': Code,
    'Mobile Development': Smartphone,
    'Tools & Technologies': Settings,
    'Specialized Skills': Target
  };

  const colorMap = {
    'Programming Languages': 'from-blue-600 to-blue-700',
    'AI & Machine Learning': 'from-green-600 to-green-700',
    'Web Development': 'from-purple-600 to-purple-700',
    'Mobile Development': 'from-teal-600 to-teal-700',
    'Tools & Technologies': 'from-orange-600 to-orange-700',
    'Specialized Skills': 'from-red-600 to-red-700'
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit spanning AI/ML, full-stack development, and competitive programming
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {skills.map((skillCategory, index) => {
              const Icon = iconMap[skillCategory.category as keyof typeof iconMap] || Code;
              const gradient = colorMap[skillCategory.category as keyof typeof colorMap] || 'from-gray-600 to-gray-700';
              
              return (
                <AnimatedSection 
                  key={index} 
                  animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className={`p-3 bg-gradient-to-r ${gradient} rounded-lg mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{skillCategory.category}</h3>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-gray-50 px-4 py-3 rounded-lg text-center hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 cursor-default"
                        >
                          <span className="text-gray-700 font-medium text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Skill Highlights */}
          <AnimatedSection>
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Why These Skills Matter</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold mb-2">AI Innovation</h4>
                    <p className="text-sm opacity-90">
                      Leveraging cutting-edge ML algorithms and computer vision to solve complex real-world problems
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Full-Stack Mastery</h4>
                    <p className="text-sm opacity-90">
                      End-to-end development from responsive frontends to scalable backend systems
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold mb-2">Problem Solving</h4>
                    <p className="text-sm opacity-90">
                      Competitive programming expertise translating to efficient algorithmic solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;