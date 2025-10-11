import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Palette,
      title: 'Design Focused',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and reliability'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Loving what I do and continuously learning'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a real impact. My journey started with a curiosity 
              about how things work on the web, and it's grown into a deep love for crafting 
              exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. 
              Whether it's building a complex web application or designing an intuitive interface, 
              I approach every project with attention to detail and a commitment to excellence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-500 mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;