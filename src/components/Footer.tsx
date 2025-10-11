import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-blue-400">John</span> Doe
            </h3>
            <p className="text-gray-400">Full Stack Developer & UI/UX Designer</p>
          </div>

          <div className="flex space-x-6">
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by John Doe © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;