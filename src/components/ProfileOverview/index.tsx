import React from 'react';
import Highlight from '@/components/Highlight';
import Author from '@/config/author';
import { Box, HStack, Icon, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import colors, { ColorType } from '@/config/colors';

interface Props { }

export function ProfileOverview() {
  const [shrink, setShrink] = React.useState(false);

  const renderDescription = (skills: typeof Author.technologies) => skills.map(technology => {
    const size = technology?.size || 15;
    const color = technology?.color ? { fill: technology.color } : {}

    return (
      <span key={technology.name} className="flex items-center mr-3">
        {<technology.icon size={size} {...color} />}
        <span className="ml-[2px]">
          {technology.name}
        </span>
      </span>
    );
  });

  const renderSkills = React.useCallback(() => {
    const skills = [
      {
        label: 'JavaScript',
        section: 'javascript',
      },
      {
        label: 'NodeJS',
        section: 'nodejs',
      },
      {
        label: 'ReactJS',
        section: 'reactjs',
      },
      {
        label: 'Design Framework',
        section: 'design-framework',
      },
      {
        label: 'PHP',
        section: 'php',
      },
      {
        label: 'Markup & Stylesheet',
        section: 'markup-language',
      },
      {
        label: 'Source Control',
        section: 'source-control',
      },
      {
        label: 'Database',
        section: 'db',
      },
      {
        label: 'API',
        section: 'api',
      },
      {
        label: 'Caching',
        section: 'cache',
      },
      {
        label: 'Deployment Service',
        section: 'deployment-service',
      },
      {
        label: 'Linux',
        section: 'linux',
      },
      {
        label: 'Ecommerce Module Development',
        section: 'ecommerce',
      },
    ];

    const renderSkillSection = (label: string, section: string) => {
      const techs = Author.technologies.filter((tech, index: number) => tech?.section === section);

      return (
        <React.Fragment key={section}>
          <div className="flex w-full mt-[10px] border-b border-borderLineDark">
            <span className="w-fit flex items-center font-sans font-medium h-[30px] px-[10px] border border-borderLineDark border-b-0 rounded-t-[4px]">
              {label}
            </span>
          </div>
          {renderDescription(techs)}
          <div className="w-full mb-[15px]"></div>
        </React.Fragment>
      );
    };

    return skills.map(skill => (
      renderSkillSection(skill.label, skill.section)
    ));
  }, [])();

  const renderAllSkills = React.useCallback(() => {
    return renderDescription(Author.technologies);
  }, [])();

  const renderShrinkContent = !shrink ?
    renderSkills : renderAllSkills;

  const handleShrink = (shrink: boolean) => {
    setShrink(shrink);
  };

  const getColor = (tag: string) => {
    const sanitizeTag = tag.toLowerCase().replace(/[^a-z]/g, '') as ColorType;
    return colors?.[sanitizeTag] || colors.default;
  }
  const technologiesBySection = Author.technologies.reduce((acc, tech) => {
    if (!acc[tech.section]) {
      acc[tech.section] = [];
    }
    acc[tech.section].push(tech);
    return acc;
  }, {});

  return (
    <Box border={'1px solid'} borderColor='gray.700' borderRadius={'10'} p={4}>
      {/* {Author.technologies.sort((a, b) => (a.section > b.section ? 1 : -1)).map((tech, index) => (
        <div key={index}>
          <p>Name: {tech.name}</p>
          <p>Size: {tech.size}</p>
          <p>Section: {tech.section}</p>
        </div>
      ))} */}
      {Object.keys(technologiesBySection).map((section, index) => (
        <Tabs position="relative" variant="unstyled">
          <TabList border={'0px solid'} borderBottom={'1px'} borderColor='gray.900' >
            <Tab key={index} border={'1px solid'} borderBottom={'0px'} py={1} borderColor='gray.800' borderTopRightRadius={'10'} borderTopLeftRadius={'10'}>{section}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HStack>
                {technologiesBySection[section].map((tech, techIndex) => (
                  <HStack key={techIndex} flexWrap={'wrap'}>
                    <Icon as={tech.icon} boxSize={tech.size} style={{
                      color: getColor(tech.name as ColorType)
                    }} />
                    <Text fontSize={14}> {tech.name}</Text>
                  </HStack>
                ))}
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      ))}

    </Box>
    // <div className="profile-overview w-full flex items-center justify-start my-7 mx-auto">
    //   <Highlight
    //     toggle={true}
    //     shrink={handleShrink}
    //     badge="Active"
    //     label="Technologies"
    //     description={renderShrinkContent}
    //   />
    // </div>
  );
};
