import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-blue-400 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
              John <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Doe</span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 min-h-[1.2em]">
              I'm a <span className="text-blue-400 font-semibold">{currentText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference. 
            I blend creativity with technical expertise to build innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="flex items-center gap-2 border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;