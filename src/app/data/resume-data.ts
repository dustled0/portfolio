export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  company: string;
  link?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    yearsExperience: number;
  };
  profile: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education;
}

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: 'Dustine Lee A. Dequito',
    title: 'Advanced App Engineering Specialist',
    phone: '+(63) 0919 0676 411',
    email: 'dustled0@gmail.com',
    location: 'Cebu City, Philippines',
    yearsExperience: 15
  },
  profile: `Experienced Web Developer with 15 years of expertise in building dynamic and responsive web applications. Proficient in modern frontend frameworks including Angular and React JS, with strong skills in DAML for blockchain-based applications. Adept at creating user-centric designs using SCSS and Bootstrap, while also leveraging PHP and WordPress for backend development.`,
  skills: [
    { name: 'Angular', level: 95, category: 'frontend' },
    { name: 'React JS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'SCSS/CSS', level: 95, category: 'frontend' },
    { name: 'Bootstrap', level: 90, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'DAML', level: 85, category: 'backend' },
    { name: 'PHP', level: 85, category: 'backend' },
    { name: 'WordPress', level: 85, category: 'backend' },
    { name: 'MySQL', level: 80, category: 'backend' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'npm/Node.js', level: 85, category: 'tools' },
    { name: 'REST APIs', level: 90, category: 'tools' },
    { name: 'Responsive Design', level: 95, category: 'other' },
    { name: 'Agile/Scrum', level: 85, category: 'other' }
  ],
  experience: [
    {
      company: 'Accenture Inc.',
      position: 'Advanced App Engineering Specialist',
      location: 'Cebu City, Philippines',
      startDate: 'Oct 2021',
      endDate: 'Present',
      responsibilities: [
        'Develop and maintain enterprise-level web applications using Angular and React',
        'Implement blockchain solutions using DAML for secure transaction processing',
        'Collaborate with cross-functional teams to deliver high-quality software solutions',
        'Mentor junior developers and conduct code reviews to ensure best practices',
        'Optimize application performance and ensure scalability for large user bases'
      ]
    },
    {
      company: 'RipeConcept',
      position: 'Front End Developer',
      location: 'Cebu City, Philippines',
      startDate: 'Aug 2017',
      endDate: 'Oct 2021',
      responsibilities: [
        'Built responsive and interactive web applications using Angular and modern JavaScript',
        'Developed custom WordPress themes and plugins for client websites',
        'Implemented pixel-perfect designs using SCSS and Bootstrap frameworks',
        'Integrated RESTful APIs and third-party services',
        'Collaborated with designers and backend developers to deliver complete solutions'
      ]
    },
    {
      company: 'Smooth Dezigns',
      position: 'Web Developer',
      location: 'Cebu City, Philippines',
      startDate: 'Jun 2010',
      endDate: 'Aug 2017',
      responsibilities: [
        'Developed and maintained websites using PHP, WordPress, and JavaScript',
        'Created responsive layouts using CSS3 and Bootstrap',
        'Managed MySQL databases and optimized queries for performance',
        'Handled client communications and project requirements gathering',
        'Provided ongoing maintenance and support for deployed applications'
      ]
    }
  ],
  projects: [
    {
      name: 'Enterprise Resource Planning System',
      description: 'Large-scale Angular application for managing company resources, inventory, and personnel.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'REST API'],
      company: 'Accenture Inc.'
    },
    {
      name: 'Blockchain Transaction Platform',
      description: 'DAML-based platform for secure and transparent financial transactions.',
      technologies: ['DAML', 'React', 'TypeScript', 'Blockchain'],
      company: 'Accenture Inc.'
    },
    {
      name: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration.',
      technologies: ['Angular', 'PHP', 'MySQL', 'Bootstrap'],
      company: 'RipeConcept'
    },
    {
      name: 'Real Estate Listing Portal',
      description: 'Property listing and search application with advanced filtering.',
      technologies: ['React', 'Node.js', 'MongoDB', 'SCSS'],
      company: 'RipeConcept'
    },
    {
      name: 'Corporate Website Portfolio',
      description: 'Collection of custom WordPress sites for various business clients.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      company: 'Smooth Dezigns'
    },
    {
      name: 'Content Management System',
      description: 'Custom CMS solution for managing dynamic website content.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      company: 'Smooth Dezigns'
    }
  ],
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of Cebu',
    location: 'Cebu City, Philippines',
    startYear: 2006,
    endYear: 2010
  }
};
