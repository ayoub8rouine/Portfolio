import React from 'react';
import { Code, Brain, Trophy, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { personalInfo, education, awards, clubs } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate engineer combining AI expertise with competitive programming excellence
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm currently pursuing my Engineering Degree in Computer Science at ENSI, where I've developed 
                  a strong foundation in AI, machine learning, and software development. My passion lies in 
                  creating intelligent systems that solve real-world problems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through internships at LARODEC Lab and Screenflex Technologies, I've gained hands-on experience 
                  in research and industry applications. I've worked on everything from healthcare optimization 
                  systems to touchless interaction technologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a competitive programmer and Codeforces Specialist, I bring strong problem-solving skills 
                  and algorithmic thinking to every project I undertake.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Full-Stack</h4>
                  <p className="text-sm text-gray-600">Web & Mobile Development</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <Brain className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">AI/ML</h4>
                  <p className="text-sm text-gray-600">Machine Learning & Computer Vision</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <Trophy className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Competitive</h4>
                  <p className="text-sm text-gray-600">Programming & Problem Solving</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Research</h4>
                  <p className="text-sm text-gray-600">Optimization & Innovation</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Education */}
          <AnimatedSection>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-600 text-sm mb-1">{edu.location}</p>
                    <p className="text-gray-500 text-sm">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Awards and Clubs */}
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Awards & Achievements</h3>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Trophy className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{award.title}</h4>
                        <p className="text-gray-600 text-sm">{award.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Clubs & Activities</h3>
                <div className="space-y-4">
                  {clubs.map((club, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{club.name}</h4>
                        <p className="text-gray-600 text-sm">{club.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;