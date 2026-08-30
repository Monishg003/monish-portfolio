export const profile = {
  firstName: 'Monish',
  lastName: 'G',
  fullName: 'Monish G',
  title: 'Java Backend Developer',
  email: 'monishg0055@gmail.com',
  phone: '+91 99449 40036',
  phoneHref: 'https://wa.me/919944940036',
  address: 'Chennai, India',
  maps: 'https://www.google.com/maps/search/?api=1&query=Chennai%2C+India',
  experience: '2+ Years',
  resume: '/Resume_latest.pdf',
  linkedin: 'https://www.linkedin.com/in/monish-g-27b157258',
  github: 'https://github.com/Monishg003',
  roles: [
    'Java Backend Developer',
    'Spring Boot Engineer',
    'Microservices Developer',
    'API Architect',
  ],
}

export const socials = [
  {
    icon: 'fa-brands fa-linkedin',
    url: profile.linkedin,
    label: 'LinkedIn',
  },
  {
    icon: 'fa-brands fa-github',
    url: profile.github,
    label: 'GitHub',
  },
  {
    icon: 'fa-solid fa-envelope',
    url: `mailto:${profile.email}`,
    label: 'Email',
  },
  {
    icon: 'fa-brands fa-whatsapp',
    url: profile.phoneHref,
    label: 'WhatsApp',
  },
]

export const about = {
  heading:
    "I'm Monish G, a Java Backend Developer focused on scalable Spring Boot and microservice systems.",
  description:
    'Java Backend Developer with 2 years of experience designing and developing scalable enterprise applications using Java, Spring Boot, and Microservices. Skilled in building RESTful APIs, integrating MongoDB, Oracle, and PostgreSQL, and working with Microsoft Azure and Google Cloud Platform. Strong knowledge of Spring Security, multithreading, object-oriented programming, database optimization, and Agile methodologies. Passionate about building secure, high-performance backend systems and writing clean, maintainable code.',
  tech: [
    'Java',
    'Spring Boot',
    'Spring Security',
    'Microservices',
    'MongoDB',
    'PostgreSQL',
    'Oracle',
    'Redis',
    'Azure',
    'GCP',
    'Kafka',
    'Docker',
  ],
}

export const education = {
  school: 'K S Rangasamy College of Technology',
  degree: 'B.E. Electronics and Communication Engineering',
  period: 'Aug 2021 – Mar 2025',
  location: 'Namakkal, Tamil Nadu',
}

export const experience = [
  {
    role: 'Backend Java Developer',
    company: 'Encipher Health',
    location: 'Chennai, India',
    period: 'Jul 2025 – Present',
    highlights: [
      'Built scalable backend services for an AI-powered healthcare platform using Java, Spring Boot, and Microservices.',
      'Designed RESTful APIs that streamlined patient workflow management and AI service integration.',
      'Architected a multi-tenant system with secure data isolation across healthcare organizations.',
      'Integrated MongoDB, Oracle, Microsoft Azure, and Google Cloud to improve scalability and reliability.',
    ],
  },
  {
    role: 'Backend Java Developer',
    company: 'Mindbridges Technologies',
    location: 'Chennai, India',
    period: 'Dec 2024 – Jun 2025',
    highlights: [
      'Developed backend services for a Timesheet Management System using Java and Spring Boot.',
      'Built secure REST APIs with Spring Security and JWT across 5+ user roles.',
      'Integrated Redis caching and WebSocket notifications, reducing redundant database access by 35%.',
      'Optimized MySQL and PostgreSQL queries for reporting and business operations.',
    ],
  },
]

export const services = [
  { icon: 'fa-solid fa-server', title: 'Backend Development' },
  { icon: 'fa-solid fa-code', title: 'REST API Design' },
  { icon: 'fa-solid fa-cubes', title: 'Microservices' },
  { icon: 'fa-solid fa-cloud', title: 'Cloud Integration' },
  { icon: 'fa-solid fa-database', title: 'Database Engineering' },
]

export const projects = [
  {
    title: 'AI Medical Coding Platform',
    company: 'Encipher Health',
    description:
      'Workflow management for AI, Coder, and Physician roles with automated task allocation. REST APIs for patient workflow, document processing, and AI inference, plus MongoDB aggregation pipelines for healthcare analytics.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'Microservices'],
    icon: 'fa-solid fa-notes-medical',
  },
  {
    title: 'Timesheet Management System',
    company: 'Mindbridges Technologies',
    description:
      'Automated employee timesheet submission and approval workflows. WebSocket real-time status updates and optimized MySQL/PostgreSQL queries for faster reporting.',
    tags: ['Spring Boot', 'JWT', 'Redis', 'WebSocket'],
    icon: 'fa-solid fa-clock',
  },
]

export const contacts = [
  {
    icon: 'fa-solid fa-house',
    title: 'Location',
    description: profile.address,
    action: profile.maps,
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Phone',
    description: profile.phone,
    action: profile.phoneHref,
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Email',
    description: profile.email,
    action: `mailto:${profile.email}`,
  },
]
