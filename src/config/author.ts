import { IconType } from 'react-icons';
import { DiJavascript1, DiJqueryLogo, DiNpm, DiCode, DiBootstrap, DiHtml5, DiCss3Full, DiSass, DiGithubBadge, DiMysql, DiMsqlServer, DiPostgresql, DiMongodb, DiFirebase, DiRedis, DiAws, DiGoogleCloudPlatform, DiHeroku, DiDocker, DiUbuntu, DiMagento, DiWordpress, DiDrupal } from 'react-icons/di';
import { FaNodeJs, FaReact, FaPhp, FaSymfony, FaLaravel, FaGitlab, FaNetworkWired, FaGraduationCap, FaGithub, FaLinkedinIn, FaRegEnvelope, FaStackOverflow, FaPhone } from 'react-icons/fa';

interface AuthorType {
  site: string;
  role: string;
  cvrole: string;
  cvdescription: string;
  name: string;
  avatar: string;
  country: string;
  city: string;
  description: string;
  countryCode: string;
  links: Links[];
  technologies: Technologies[];
  workstories: StoryType[];
  educationstories: StoryType[];
}
interface Links {
  link: string;
  icon: IconType;
  label: string;
  useTitle?: string;
  hidden?: boolean
}
interface Technologies {
  name: string;
  size?: number;
  icon: IconType;
  color?: string;
  section: string;
  isStarred?: boolean;
}

interface StoryType {
  icon?: IconType;
  tags?: string[];
  label: string;
  badge?: string;
  description?: string;
  functions?: string[];
}

const Author: AuthorType = {
  site: '<aitorsolana.dev />',
  name: 'Aitor Solana',
  role: 'Backend Developer',
  cvrole: 'Senior Full-Stack Developer',
  avatar: 'https://avatars.githubusercontent.com/u/57442992',
  city: 'Barcelona',
  country: 'Spain',
  countryCode: 'ES',
  description: 'Software Engineer, Backend Developer, PHP Expert, APP Developer Enthusiast',
  cvdescription: 'Hola, soy Aitor, desarrollador con más de 7 años de experiencia en desarrollo de software y creación de sitios web full-stack. Soy apasionadoo en lo que hago y estaría feliz de tener la oportunidad de colaborar contigo.',
  links: [
    {
      link: 'tel:+34697222324',
      icon: FaPhone,
      label: '+34697222324',
      useTitle: 'Teléfono',
    },
    {
      link: 'mailto:aitor23.soro@gmail.com',
      icon: FaRegEnvelope,
      label: 'aitor23.soro@gmail.com',
      useTitle: 'Correo Electrónico',
    },
    {
      link: 'https://github.com/soro23',
      icon: FaGithub,
      label: 'GitHub',
      hidden: true,
    },
    {
      link: 'https://stackoverflow.com/users/21296801/aitor-sr/',
      icon: FaStackOverflow,
      label: 'Stack Overflow',
      useTitle: 'StackOverflow/aitor-sr',
      hidden: true,
    },
    {
      link: 'https://www.linkedin.com/in/aitor-solana-roca/',
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      useTitle: 'LinkedIn/aitor-solana-roca',
      hidden: true,
    },
  ],
  technologies: [
    // Javascript
    {
      name: 'JavaScript',
      size: 17,
      icon: DiJavascript1,
      color: '#f7df1e',
      section: 'JavaScript',
      isStarred: true,
    },
    {
      name: 'TypeScript',
      size: 17,
      icon: DiJavascript1,
      section: 'JavaScript',
    },
    {
      name: 'jQuery',
      icon: DiJqueryLogo,
      color: '#0769ad',
      section: 'JavaScript',
      isStarred: true,
    },
    // NodeJS
    {
      name: 'Node.JS',
      icon: FaNodeJs,
      color: '#44883e',
      section: 'NodeJS',
      isStarred: true,
    },
    {
      name: 'Express.JS',
      icon: FaNodeJs,
      color: '#44883e',
      section: 'NodeJS',
    },
    {
      name: 'Socket.IO',
      icon: FaNodeJs,
      color: '#000',
      section: 'Web Socket',
    },
    {
      name: 'NPM',
      icon: DiNpm,
      size: 18,
      color: '#cb3837',
      section: 'NodeJS',
    },
    // ReactJS
    {
      name: 'React.JS',
      icon: FaReact,
      color: '#00d8ff',
      section: 'ReactJS',
    },
    {
      name: 'Next.JS',
      icon: FaReact,
      color: '#00d8ff',
      section: 'ReactJS',
      isStarred: true,
    },
    {
      name: 'NextAuth',
      icon: FaReact,
      color: '#00d8ff',
      section: 'ReactJS',
    },
    // Design Framework
    {
      name: 'Tailwind CSS',
      icon: DiCode,
      size: 18,
      color: '#38bdf8',
      section: 'Design Framework',
    },
    {
      name: 'Material UI',
      icon: DiCode,
      size: 18,
      color: '#007fff',
      section: 'Design Framework',
    },
    {
      name: 'Chakra UI',
      icon: DiCode,
      size: 18,
      section: 'Design Framework',
      isStarred: true,
    },
    {
      name: 'Bootstrap',
      icon: DiBootstrap,
      color: '#563d7c',
      section: 'Design Framework',
      isStarred: true,
    },
    // PHP
    {
      name: 'PHP',
      icon: FaPhp,
      size: 18,
      color: '#4f5b93',
      section: 'PHP',
      isStarred: true,
    },
    {
      name: 'Composer',
      icon: DiCode,
      size: 18,
      section: 'PHP',
      isStarred: true,
    },
    {
      name: 'Symfony',
      icon: FaSymfony,
      size: 18,
      color: '#4f5b93',
      section: 'PHP',
    },
    {
      name: 'Laravel',
      icon: FaLaravel,
      size: 18,
      color: '#4f5b93',
      section: 'PHP',
    },
    // Markup & Stylesheet
    {
      name: 'HTML5',
      icon: DiHtml5,
      color: '#e34c26',
      section: 'Markup & Stylesheet',
      isStarred: true,
    },
    {
      name: 'CSS3',
      icon: DiCss3Full,
      color: '#264de4',
      section: 'Markup & Stylesheet',
      isStarred: true,
    },
    {
      name: 'Sass',
      icon: DiSass,
      color: '#c69',
      section: 'Markup & Stylesheet'
    },
    {
      name: 'XML',
      icon: DiCode,
      color: '#264de4',
      section: 'Markup & Stylesheet'
    },
    // Source Control
    {
      name: 'GitHub',
      size: 18,
      icon: DiGithubBadge,
      color: '#4078c0',
      section: 'Source Control',
      isStarred: true,
    },
    {
      name: 'Gitlab',
      icon: FaGitlab,
      size: 13,
      color: '#fca326',
      section: 'Source Control',
    },
    // Database
    {
      name: 'MySQL',
      size: 18,
      icon: DiMysql,
      color: '#00758f',
      section: 'Database',
      isStarred: true,
    },
    {
      name: 'MSSQL',
      size: 18,
      icon: DiMsqlServer,
      color: '#00758f',
      section: 'Database',
    },
    {
      name: 'PostgreSQL',
      size: 18,
      icon: DiPostgresql,
      color: '#0db7ed',
      section: 'Database',
    },
    {
      name: 'MongoDB',
      icon: DiMongodb,
      size: 18,
      color: '#4DB33D',
      section: 'Database',
      isStarred: true,
    },
    {
      name: 'Firebase',
      icon: DiFirebase,
      size: 18,
      color: '#FFA611',
      section: 'Database',
    },
    // API
    {
      name: 'Rest API',
      icon: DiCode,
      size: 18,
      section: 'API',
      isStarred: true,
    },
    // Catching
    {
      name: 'Redis',
      icon: DiRedis,
      size: 18,
      color: '#d82c20',
      section: 'Caching',
    },
    // Deployment 
    {
      name: 'Vercel',
      icon: FaReact,
      color: '#00d8ff',
      section: 'Deployment Service',
    },
    {
      name: 'Netlify',
      icon: FaReact,
      color: '#00AD9F',
      section: 'Deployment Service',
    },
    {
      name: 'Firebase',
      icon: DiFirebase,
      size: 18,
      color: '#FFA611',
      section: 'Deployment Service',
    },
    {
      name: 'AWS',
      icon: DiAws,
      size: 18,
      color: '#FF9900',
      section: 'Deployment Service',
      isStarred: true,
    },
    {
      name: 'Google Cloud Platform',
      icon: DiGoogleCloudPlatform,
      size: 18,
      color: '#4285F4',
      section: 'Deployment Service',
    },
    {
      name: 'Heroku',
      icon: DiHeroku,
      color: '#6567a5',
      section: 'Deployment Service',
    },
    {
      name: 'Docker',
      icon: DiDocker,
      color: '#0db7ed',
      section: 'Deployment Service',
    },
    // Linux
    {
      name: 'Ubuntu',
      icon: DiUbuntu,
      size: 18,
      section: 'Linux',
      isStarred: true,
    },
    // Ecommerce Development
    {
      name: 'Magento 2',
      icon: DiMagento,
      size: 18,
      color: '#f2641c',
      section: 'Ecommerce Module Development',
      isStarred: true,
    },
    {
      name: 'WordPress',
      icon: DiWordpress,
      size: 18,
      color: '#21759b',
      section: 'Ecommerce Module Development',
      isStarred: true,
    },
    {
      name: 'WooCommerce',
      icon: DiWordpress,
      size: 18,
      color: '#7c51ad',
      section: 'Ecommerce Module Development'
    },
    {
      name: 'Drupal',
      icon: DiDrupal,
      size: 18,
      color: '#21759b',
      section: 'Ecommerce Module Development'
    },
  ],
  workstories: [
    {
      tags: ['React Native', 'Firebase', 'MongoDB','Google Cloud Platform', 'Node.JS', 'Wordpress', 'PHP', 'jQuery', 'MySQL', 'Rest API', 'Ubuntu'],
      badge: 'Work Expirience',
      label: 'Preico Juridicos',
      icon: FaNetworkWired,
      description: 'March 24 - Actually',
      functions: [
        'Developed an internal CRM for managing clients and legal procedures in a law firm.',
        'Created a secure API to allow external data extraction and remote creation of new clients.',
        'Built a WebApp to visually manage sponsors of a Moto2 team, including sponsor placement on bike, helmet, suit, and truck.',
        'Implemented automations in payment and invoicing software to streamline internal workflows.',
      ],
    },
    {
      tags: ['Magento 2', 'Wordpress', 'PHP', 'jQuery', 'Composer', 'Synfony', 'MySQL', 'MSSQL', 'Rest API', 'Ubuntu'],
      badge: 'Work Expirience',
      label: 'Interdigital',
      icon: FaNetworkWired,
      description: 'July 19 - March 24',
      functions: [
        'Developed several Magento modules for data synchronization with ERPs such as Microsoft Dynamics 365, Sage, etc.',
        'Developed several Magento modules to add and modify functionalities for both the frontend and the backend.',
        'Analyzed and carried out solutions to optimize the performance of various ecommerce.',
        'Optimized the database queries to enhance the website\'s performance.',
        'Conducted a security audit on the website to identify potential vulnerabilities and implement prote\ctive measures.',
        'Developed an API to facilitate data integration between the website and externa\l applications.',
        'Enhanced the user experience on the website through improvements in navigation, layout, and\ accessibility.',
      ],
    },
    {
      tags: ['PHP', 'jQuery', 'MySQL', 'Rest API'],
      badge: 'Work Expirience',
      label: 'Ebuga',
      icon: FaNetworkWired,
      description: 'March 12 - September 14 ',
      functions: [
        'Implemented a real-time inventory management system for the online car dealership, ensuring that the website reflects accurate stock levels and availability.',
        'Optimized the database queries to improve the performance of the online car sales website.',
        'Developed a customer relationship management (CRM) system for the car dealership, enabling sales representatives to manage leads, track interactions, and follow up with potential customers effectively,',
        'Developed an API to facilitate seamless data synchronization between the website frontend and the backoffice backend, ensuring consistency across platforms.',
      ],
    },
    {
      tags: ['WebSockets', 'Java'],
      badge: 'Work Expirience',
      label: 'INRETI',
      icon: FaNetworkWired,
      description: 'October 11 - September 12 ',
      functions: [
        'Collaborated with hardware engineers to implement a real-time communication protocol between the spinning application and the connected device, allowing seamless interaction and feedback during virtual classes.',
        'Developed a virtual route mapping feature within the spinning application, enabling users to visualize their progress along simulated routes with elevation changes, resistance adjustments, and speed variations.',
      ],
    },
  ],
  educationstories: [
    // Education
    {
      tags: ['MongoDB', 'Express', 'AngularJS', 'NodeJS', 'MicroServices'],
      badge: 'Education',
      label: 'Netmind',
      icon: FaGraduationCap,
      description: 'August 18 - June 19 ',
    },
    {
      tags: ['MySQL', 'Oracle', 'PHP', 'Javascript', 'MicroServices', 'Java', 'Algorithms'],
      badge: 'Education',
      label: 'Pia Santa Anna Collegue',
      icon: FaGraduationCap,
      description: 'August 09 - June 12 ',
    },
  ],
};

export default Author;
