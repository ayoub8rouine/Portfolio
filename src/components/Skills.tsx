import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(({ title, skills }) => (
            <div key={title} className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{title}</h3>
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{name}</span>
                      <span className="text-blue-500 text-sm">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;