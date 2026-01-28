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
  screenshot?: string;
  icon?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  icon?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image?: string;
  tags: string[];
}

export interface Statistic {
  value: number;
  label: string;
  suffix?: string;
  icon: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    yearsExperience: number;
    availableForWork: boolean;
    availabilityStatus?: string;
  };
  profile: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education;
  testimonials: Testimonial[];
  certifications: Certification[];
  blogPosts: BlogPost[];
  statistics: Statistic[];
}

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: 'Dustine Lee A. Dequito',
    title: 'Advanced App Engineering Specialist',
    phone: '+(63) 0919 0676 411',
    email: 'dustled0@gmail.com',
    location: 'Cebu City, Philippines',
    yearsExperience: 15,
    availableForWork: true,
    availabilityStatus: 'Available for Freelance'
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
      startDate: 'Apr 2015',
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
      startDate: 'Feb 2013',
      endDate: 'Jul 2015',
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
      startDate: 'Jan 2012',
      endDate: 'Jan 2013',
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
      company: 'Accenture Inc.',
      icon: 'fas fa-chart-line',
      screenshot: 'assets/projects/erp-system.png'
    },
    {
      name: 'Blockchain Transaction Platform',
      description: 'DAML-based platform for secure and transparent financial transactions.',
      technologies: ['DAML', 'React', 'TypeScript', 'Blockchain'],
      company: 'Accenture Inc.',
      icon: 'fas fa-link',
      screenshot: 'assets/projects/blockchain-platform.png'
    },
    {
      name: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration.',
      technologies: ['Angular', 'PHP', 'MySQL', 'Bootstrap'],
      company: 'RipeConcept',
      icon: 'fas fa-shopping-cart',
      screenshot: 'assets/projects/ecommerce-platform.png'
    },
    {
      name: 'Real Estate Listing Portal',
      description: 'Property listing and search application with advanced filtering.',
      technologies: ['React', 'Node.js', 'MongoDB', 'SCSS'],
      company: 'RipeConcept',
      icon: 'fas fa-home',
      screenshot: 'assets/projects/real-estate-portal.png'
    },
    {
      name: 'Corporate Website Portfolio',
      description: 'Collection of custom WordPress sites for various business clients.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      company: 'Smooth Dezigns',
      icon: 'fas fa-globe',
      screenshot: 'assets/projects/corporate-websites.png'
    },
    {
      name: 'Content Management System',
      description: 'Custom CMS solution for managing dynamic website content.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      company: 'Smooth Dezigns',
      icon: 'fas fa-database',
      screenshot: 'assets/projects/cms-system.png'
    }
  ],
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of Cebu',
    location: 'Cebu City, Philippines',
    startYear: 2006,
    endYear: 2010
  },
  testimonials: [
    {
      name: 'Sarah Chen',
      position: 'Senior Project Manager',
      company: 'Accenture Inc.',
      quote: 'Dustine is an exceptional developer who consistently delivers high-quality work. His expertise in Angular and React has been invaluable to our team. He\'s not just technically skilled but also a great mentor to junior developers.'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Tech Lead',
      company: 'Accenture Inc.',
      quote: 'Working with Dustine has been a pleasure. His attention to detail and ability to solve complex problems make him stand out. He\'s always up-to-date with the latest technologies and best practices.'
    },
    {
      name: 'Jennifer Santos',
      position: 'CEO',
      company: 'RipeConcept',
      quote: 'Dustine was instrumental in building our e-commerce platform. His frontend expertise and dedication to creating pixel-perfect designs exceeded our expectations. Highly recommended!'
    }
  ],
  certifications: [
    {
      name: 'Angular Developer Certification',
      issuer: 'Google',
      date: 'Jan 2023',
      credentialId: 'ANG-2023-001',
      icon: 'fab fa-angular'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Mar 2022',
      credentialId: 'AWS-CCP-2022',
      icon: 'fab fa-aws'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: 'Sep 2021',
      credentialId: 'PSM-I-2021',
      icon: 'fas fa-tasks'
    },
    {
      name: 'React Developer Certificate',
      issuer: 'Meta',
      date: 'Jun 2021',
      credentialId: 'META-REACT-2021',
      icon: 'fab fa-react'
    }
  ],
  blogPosts: [
    {
      title: 'Building Scalable Angular Applications: Best Practices',
      excerpt: 'Learn the essential patterns and practices for building enterprise-grade Angular applications that scale.',
      date: 'Dec 2024',
      url: '#',
      tags: ['Angular', 'Architecture', 'Best Practices']
    },
    {
      title: 'Modern CSS Techniques Every Developer Should Know',
      excerpt: 'Explore modern CSS features like Grid, Container Queries, and CSS Variables that will level up your styling game.',
      date: 'Nov 2024',
      url: '#',
      tags: ['CSS', 'Frontend', 'Web Design']
    },
    {
      title: 'Introduction to DAML for Blockchain Development',
      excerpt: 'A beginner-friendly guide to DAML and how it simplifies building blockchain-based applications.',
      date: 'Oct 2024',
      url: '#',
      tags: ['DAML', 'Blockchain', 'Smart Contracts']
    }
  ],
  statistics: [
    {
      value: 15,
      label: 'Years Experience',
      suffix: '+',
      icon: 'fas fa-briefcase'
    },
    {
      value: 50,
      label: 'Projects Completed',
      suffix: '+',
      icon: 'fas fa-project-diagram'
    },
    {
      value: 20,
      label: 'Happy Clients',
      suffix: '+',
      icon: 'fas fa-smile'
    },
    {
      value: 100,
      label: 'Code Reviews',
      suffix: '+',
      icon: 'fas fa-code'
    }
  ]
};
