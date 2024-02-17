import React from 'react';
import splitArray from '../../../helpers/splitArray';
import Highlight, {
  Props as HighlightProps,
  ValidUrlType
} from '../../Highlight';
import { FaGraduationCap, FaNetworkWired } from 'react-icons/fa';

interface StoryType extends HighlightProps {
  // functions?: string[];
}

interface Props { }

const StoryOverview: React.FC<Props> = () => {

  const storyWork: StoryType[][] = React.useCallback(() => {
    const workstories: StoryType[] = [
      {
        tags: ['Magento 2', 'Wordpress', 'PHP', 'jQuery', 'Composer', 'Synfony', 'MySQL', 'MSSQL', 'Rest API', 'Ubuntu'],
        badge: 'Work Expirience',
        label: 'Interdigital',
        icon: FaNetworkWired,
        description: 'July 19 - Actually',
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
    ];
    return splitArray(workstories, 1);
  }, [])();
  const storyEducation: StoryType[][] = React.useCallback(() => {
    const educationstories: StoryType[] = [
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
    ];
    return splitArray(educationstories, 1);
  }, [])();

  return (
    <React.Fragment>
      <div className="w-full grid grid-cols-1 gap-y-5 md:gap-x-[20px] items-start justify-start mx-auto">
        {storyWork.map(stories => stories.map((story, index: number) => (
          <Highlight
            key={`highlight-${index}`}
            toggle={false}
            icon={story?.icon}
            badge={story?.badge}
            label={story.label}
            description={story?.description}
            tags={story?.tags}
            functions={story?.functions}
          />
        )))}
      </div>
      <hr className="border-b-2 border-borderLineDark mt-[30px]" />
      <div className="w-full grid grid-cols-1 gap-y-5 md:gap-x-[20px] items-start justify-start mx-auto">
        {storyEducation.map(stories => stories.map((story, index: number) => (
          <Highlight
            key={`highlight-${index}`}
            toggle={false}
            icon={story?.icon}
            badge={story?.badge}
            label={story.label}
            description={story?.description}
            tags={story?.tags}
          />
        )))}
      </div>
    </React.Fragment>
  );
};

export default StoryOverview;