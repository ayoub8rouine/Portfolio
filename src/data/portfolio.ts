import { Experience, Project, Skill, Award, Club } from '../types';

export const personalInfo = {
  name: "Ayoub Rouine",
  title: "AI Engineer & Full-Stack Developer",
  email: "ayoub.rouin@ensi-uma.tn",
  github: "https://github.com/ayoub8rouine",
  linkedin: "https://www.linkedin.com/in/rouin-ayoub",
  bio: "Passionate AI Engineer and competitive programmer with expertise in machine learning, computer vision, and full-stack development. Experienced in building intelligent systems and optimizing complex algorithms."
};

export const experiences: Experience[] = [
  {
    id: "screenflex-2025",
    company: "Screenflex Technologies",
    position: "Software Engineering Intern",
    location: "EL Ghazela, Tunisia",
    duration: "2025",
    description: "Developed advanced touchless interaction systems and secure mobile applications",
    technologies: ["Python", "MediaPipe", "Ultraleap SDK", "OpenCV", "PyQt5", "React Native", "Kotlin", "Android SDK"],
    highlights: [
      "Developed touchless interaction system combining camera-based MediaPipe tracking and Ultraleap 3D tracking",
      "Designed gesture recognition model for intuitive user input",
      "Built secure Android kiosk-mode app with controlled user interaction"
    ]
  },
  {
    id: "larodec-2024",
    company: "LARODEC Lab",
    position: "Research Intern",
    location: "Manouba, Tunisia",
    duration: "2024",
    description: "Designed AI-driven optimization models for healthcare logistics",
    technologies: ["Python", "NumPy", "SciPy", "DEAP", "NetworkX", "scikit-learn", "Matplotlib", "Pandas"],
    highlights: [
      "Designed fuzzy logic-based model to manage uncertainties in patient time windows",
      "Implemented NSGA-II algorithm to optimize travel time, workload balance, and service coverage",
      "Achieved 94% on-time service rate across all clients"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ai-diagnosis-system",
    title: "AI-Based Medical Diagnosis System",
    description: "Comprehensive AI system for medical diagnosis using both symptom analysis and medical imaging",
    technologies: ["Python", "XGBoost", "ResNet", "YOLO", "TensorFlow", "Flask", "React", "GPT-4 API"],
    features: [
      "Two-stage XGBoost pipeline trained on 275,000+ medical records",
      "Multi-domain image classification using specialized ResNet models",
      "YOLO + ResNet pipeline for blood cell analysis",
      "GPT-4 integration for symptom extraction and result interpretation",
      "Full-stack web application with React frontend and Flask backend"
    ],
    year: "2023"
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "C", "SQL", "PL/SQL"]
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "XGBoost", "scikit-learn", "YOLO", "ResNet", "Computer Vision", "NLP"]
  },
  {
    category: "Web Development",
    items: ["React", "Node.js", "Flask", "HTML/CSS", "REST APIs", "Database Design"]
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Kotlin", "Android SDK", "Cross-platform Development"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git/GitHub", "Docker", "Azure", "MySQL", "VS Code", "Jupyter", "Linux"]
  },
  {
    category: "Specialized Skills",
    items: ["Competitive Programming", "Algorithm Design", "Data Structures", "Optimization", "Research"]
  }
];

export const awards: Award[] = [
  {
    title: "Programming Contest Winner",
    description: "Winner – ENSI 40th Anniversary Competitive Programming Contest"
  },
  {
    title: "Codeforces Specialist",
    description: "Specialist-rated competitive programmer on Codeforces platform"
  }
];

export const clubs: Club[] = [
  {
    name: "IEEE ENSI Student Branch",
    role: "Member"
  },
  {
    name: "ECPC – ENSI Competitive Programming Club",
    role: "Active Member"
  },
  {
    name: "ENSI Robotics Club",
    role: "Member"
  }
];

export const education = [
  {
    institution: "National School of Computer Science (ENSI)",
    degree: "Engineering Degree in Computer Science",
    location: "Manouba, Tunisia",
    duration: "2023 – Present"
  },
  {
    institution: "Preparatory Institute for Engineering Studies of El Manar (IPEIEM)",
    degree: "Preparatory Classes in Physics and Technology",
    location: "Tunis, Tunisia",
    duration: "2021 – 2023"
  }
];