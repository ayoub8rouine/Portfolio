import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import TypewriterText from '../components/TypewriterText';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
            <span className="text-white text-4xl font-bold">AR</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {personalInfo.name}
          </h1>

          {/* Animated Title */}
          <div className="text-2xl md:text-3xl font-semibold mb-8 h-12">
            <TypewriterText 
              texts={[
                "AI Engineer",
                "Full-Stack Developer", 
                "Competitive Programmer",
                "Machine Learning Expert",
                "Research Enthusiast"
              ]} 
            />
          </div>

          {/* Bio */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-blue-600 hover:text-blue-700"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-gray-800 hover:text-gray-900"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 text-teal-600 hover:text-teal-700"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-gray-800"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;