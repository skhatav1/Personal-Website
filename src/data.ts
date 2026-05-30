export const contact = {
  email: 'swarkhatav370@gmail.com',
  phone: '781-921-4558',
  location: 'Tempe, AZ',
  linkedin: 'https://www.linkedin.com/in/swarkhatav/',
  resume: '/Swar_Khatav_Resume_SWE.pdf',
};

export const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  contact.email,
)}&su=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent('Hi Swar,\n\nI came across your portfolio and wanted to connect.\n\n')}`;

export const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Velocified LMS',
    date: 'Aug 2025 - May 2026',
    bullets: [
      'Developed full-stack LMS features using React, Go, PostgreSQL, and REST APIs across frontend, backend, and database layers.',
      'Designed backend API endpoints for authentication, session management, OTP verification, and password reset workflows using signed cookies and database-driven access control.',
      'Built role-based dashboards for learners, managers, coaches, and administrators with dynamic data rendering, reporting, and conditional UI logic.',
      'Contributed to Docker-based development, CI/CD workflows, integration testing, PostgreSQL schema design, query optimization, and technical documentation.',
    ],
  },
  {
    role: 'Technical Operations Specialist',
    company: 'School of Social Work, Arizona State University',
    date: 'July 2024 - Feb 2025',
    bullets: [
      'Automated operational workflows and data processing pipelines using Python and Java, reducing manual processing overhead by 40%.',
      'Optimized SQL queries, indexing strategies, and PostgreSQL workflows to improve reporting and data retrieval performance.',
      'Developed backend scripts and microservices that integrated external services via REST APIs for scalable internal data exchange.',
      'Built data validation, transformation, monitoring, alerting, logging, and retry logic for recurring reporting and ETL workflows.',
      'Containerized Python automation services with Docker to standardize local, staging, and production execution.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Programmatix Institute',
    date: 'May 2023 - Aug 2023',
    bullets: [
      'Developed a full-stack web application using Next.js, TypeScript, and Tailwind CSS with scalable, responsive user-facing features.',
      'Created a dynamic article publishing system to improve content management and publishing efficiency.',
      'Collaborated with two UI/UX designers to build a responsive interface with SEO and performance optimizations, helping the website reach over 1,000 visitors.',
    ],
  },
];

export const impactMetrics = [
  { value: '4.0', label: 'ASU GPA', detail: 'B.S. Computer Science' },
  { value: '40%', label: 'Ops reduction', detail: 'Python + Java automation' },
  { value: '1k+', label: 'Visitors / requests', detail: 'Product and platform scale' },
  { value: '2026', label: 'Graduation', detail: 'Open to SWE roles' },
];

export const focusAreas = [
  {
    title: 'Full-stack product engineering',
    eyebrow: 'Frontend + Backend',
    description: 'Builds polished user interfaces backed by REST APIs, auth flows, dashboards, and relational data models.',
    stack: ['React', 'TypeScript', 'Go', 'PostgreSQL'],
  },
  {
    title: 'Automation and data systems',
    eyebrow: 'Efficiency',
    description: 'Designs scripts, data validation, ETL workflows, monitoring, and reporting automation that reduce manual work.',
    stack: ['Python', 'SQL', 'Docker', 'APIs'],
  },
  {
    title: 'Cloud-ready application delivery',
    eyebrow: 'Deployment',
    description: 'Ships deployable applications with CI/CD awareness, containerized environments, and production-friendly architecture.',
    stack: ['Vercel', 'GCP', 'Kubernetes', 'GitHub Actions'],
  },
];

export const projects = [
  {
    name: 'StudySync',
    category: 'AI Product',
    tech: ['Flutter', 'Firebase Auth', 'Firestore', 'FastAPI', 'Python', 'Render', 'Vercel'],
    signal: 'Live AI Product',
    accent: 'from-cyan-300 to-blue-500',
    stats: ['Live Vercel demo', 'Render FastAPI backend', 'Firebase real-time data'],
    liveUrl: 'https://studysync-coral.vercel.app',
    githubUrl: 'https://github.com/skhatav1/StudySync-',
    description:
      'A full-stack AI-powered collaborative study planner that creates adaptive schedules, tracks study progress, manages resources, supports study groups, and transforms notes into summaries, flashcards, and quizzes.',
  },
  {
    name: 'SmartHealth Tracker',
    category: 'AI Analytics',
    tech: ['Python', 'Django', 'React', 'PostgreSQL'],
    signal: 'AI Analytics',
    accent: 'from-emerald-300 to-cyan-500',
    stats: ['Health insights', 'Realtime charts', 'PostgreSQL data'],
    description:
      'An AI-driven health tracking system that provides personalized fitness and nutrition recommendations with a real-time analytics dashboard.',
  },
  {
    name: 'EduLearn',
    category: 'Full Stack',
    tech: ['Node.js', 'Express', 'React', 'PostgreSQL'],
    signal: 'Adaptive Learning',
    accent: 'from-violet-300 to-fuchsia-500',
    stats: ['REST APIs', 'AI personalization', 'Learning analytics'],
    description:
      'An adaptive learning platform that customizes educational content based on learning styles using data analytics and AI. Includes REST API integration for external educational tools.',
  },
  {
    name: 'Velocified LMS Enhancement',
    category: 'Dashboard',
    tech: ['JavaScript', 'Backend Integration', 'Dashboard UI'],
    signal: 'Dashboard Systems',
    accent: 'from-amber-200 to-orange-500',
    stats: ['Manager views', 'Progress charts', 'Role-based UI'],
    description:
      'Enhanced an LMS platform by improving manager dashboards, connecting backend functionality, fixing UI issues, adding progress charts, and supporting role-based dashboard features.',
  },
];

export const techLogos = [
  { name: 'JavaScript', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', category: 'Frontend', icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', category: 'Backend', icon: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'Python', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', category: 'Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'PostgreSQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Firebase', category: 'Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Docker', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'https://cdn.simpleicons.org/tailwindcss/38bdf8' },
  { name: 'Flutter', category: 'Mobile', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Django', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'OpenAI API', category: 'AI', icon: 'https://cdn.simpleicons.org/openai/ffffff' },
  { name: 'Google Cloud', category: 'Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Kubernetes', category: 'Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Terraform', category: 'Infrastructure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'MongoDB', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'GitHub Actions', category: 'CI/CD', icon: 'https://cdn.simpleicons.org/githubactions/60a5fa' },
  { name: 'Jenkins', category: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'Go', 'C++', 'Java', 'SQL', 'Bash', 'HTML5', 'CSS3', 'R'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Webpack', 'Vite'],
  },
  {
    category: 'Backend & Frameworks',
    items: ['Go', 'Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Kubernetes', 'Docker', 'Google Cloud Platform', 'Terraform', 'Helm Charts', 'Jenkins', 'GitHub Actions', 'GitLab CI'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase Firestore', 'SQL Query Optimization', 'Data Modeling'],
  },
  {
    category: 'Testing & Methodologies',
    items: ['Jest', 'Pytest', 'JUnit', 'React Testing Library', 'Cypress', 'TDD', 'Agile/Scrum', 'SOLID', 'Microservices', 'MVC', 'Code Reviews'],
  },
];

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Arizona State University',
  location: 'Tempe, AZ',
  gpa: '4.0/4.0',
  dates: 'Aug 2022 - May 2026',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networking',
    'Distributed Systems',
    'Database Management',
    'Software Engineering',
    'Cloud Computing',
  ],
};
