import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to collaborate on innovative AI projects or discuss exciting opportunities? 
              I'd love to hear from you!
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <p className="opacity-90 leading-relaxed mb-8">
                    I'm always interested in discussing new opportunities, collaborating on innovative projects, 
                    or simply connecting with fellow developers and researchers. Whether you have a project in mind, 
                    need consultation on AI/ML solutions, or want to chat about competitive programming, 
                    feel free to reach out!
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="opacity-90">{personalInfo.email}</p>
                    </div>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="opacity-90">Professional Network</p>
                    </div>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="opacity-90">Code Repository</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-lg">
                    <MapPin className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="opacity-90">Tunisia</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-in-right">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2" />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-white placeholder-opacity-70 text-white"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-white placeholder-opacity-70 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-white placeholder-opacity-70 text-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-white placeholder-opacity-70 text-white resize-none"
                      placeholder="Tell me about your project, question, or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>

                <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
                  <p className="text-sm opacity-90 text-center">
                    💡 <strong>Pro tip:</strong> Try the AI chatbot in the bottom-right corner to learn more about my experience and skills!
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;