import { IconType } from 'react-icons';
import { DiJavascript1, DiJqueryLogo, DiNpm, DiCode, DiBootstrap, DiHtml5, DiCss3Full, DiSass, DiGithubBadge, DiMysql, DiMsqlServer, DiPostgresql, DiMongodb, DiFirebase, DiRedis, DiAws, DiGoogleCloudPlatform, DiHeroku, DiDocker, DiUbuntu, DiMagento, DiWordpress, DiDrupal } from 'react-icons/di';
import { FaNodeJs, FaReact, FaPhp, FaSymfony, FaLaravel, FaGitlab } from 'react-icons/fa';

interface AuthorType {
  site: string;
  role: string;
  name: string;
  avatar: string;
  country: string;
  city: string;
  description: string;
  countryCode: string;
  technologies: Technologies[];
}

interface Technologies {
  name: string;
  size?: number;
  icon: IconType;
  color?: string;
  section: string;
}

const Author: AuthorType = {
  site: '<aitorsolana.dev />',
  name: 'Aitor Solana',
  role: 'Backend Developer',
  avatar: 'https://avatars.githubusercontent.com/u/57442992',
  city: 'Barcelona',
  country: 'Spain',
  countryCode: 'ES',
  description: 'Software Engineer, Backend Developer, PHP Expert, Magento 2 Enthusiast',
  technologies: [
    // Javascript
    {
      name: 'JavaScript',
      size: 17,
      icon: DiJavascript1,
      color: '#f7df1e',
      section: 'JavaScript',
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
    },
    // NodeJS
    {
      name: 'Node.JS',
      icon: FaNodeJs,
      color: '#44883e',
      section: 'NodeJS',
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
      section: 'web-socket',
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
    },
    {
      name: 'Bootstrap',
      icon: DiBootstrap,
      color: '#563d7c',
      section: 'Design Framework',
    },
    // PHP
    {
      name: 'PHP',
      icon: FaPhp,
      size: 18,
      color: '#4f5b93',
      section: 'PHP',
    },
    {
      name: 'Composer',
      icon: DiCode,
      size: 18,
      section: 'PHP',
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
      section: 'Markup & Stylesheet'
    },
    {
      name: 'CSS3',
      icon: DiCss3Full,
      color: '#264de4',
      section: 'Markup & Stylesheet'
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
    },
    // Ecommerce Development
    {
      name: 'Magento 2',
      icon: DiMagento,
      size: 18,
      color: '#f2641c',
      section: 'Ecommerce Module Development'
    },
    {
      name: 'WordPress',
      icon: DiWordpress,
      size: 18,
      color: '#21759b',
      section: 'Ecommerce Module Development'
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
};

export default Author;