import React, { useState } from 'react';
import Highlight from '@/components/Highlight';
import Author from '@/config/author';
import { Box, HStack, Heading, Icon, IconButton, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import colors, { ColorType } from '@/config/colors';
import { Ri24HoursFill, RiSearch2Fill } from 'react-icons/ri';
import { GiStack } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface Props { }

interface TechnologiesBySection {
  [key: string]: typeof Author['technologies'];
}

export function ProfileOverview() {
  const [isShrink, setIsShrink] = useState(false);
  const toggleIsShrink = () => {
    setIsShrink(!isShrink); // Cambiar el estado de true a false o de false a true
  };

  
  const technologiesBySection: TechnologiesBySection = Author.technologies.reduce((acc: TechnologiesBySection, tech) => {
    if (!acc[tech.section]) {
      acc[tech.section] = [];
    }
    acc[tech.section].push(tech);
    return acc;
  }, {});

  const getColor = (tag: string) => {
    const sanitizeTag = tag.toLowerCase().replace(/[^a-z]/g, '') as ColorType;
    return colors?.[sanitizeTag] || colors.default;
  }

  return (
    <Box border={'1px solid'} borderColor='gray.700' borderRadius={'10'} p={4}>
      <HStack justifyContent={'space-between'}>
        <Heading as={'h4'} fontSize={'large'} color={'dark.highlight-text'} display={'flex'} gap={2}><GiStack/>Technologies</Heading>
        {!isShrink ? (
          <IoIosArrowUp onClick={toggleIsShrink} cursor={'pointer'} />
          ) : (
          <IoIosArrowDown onClick={toggleIsShrink} cursor={'pointer'} />
        )}
      </HStack>
      {!isShrink ? (
        Object.keys(technologiesBySection).map((section, index) => (
          <Tabs position="relative" variant="unstyled">
            <TabList border={'0px solid'} borderBottom={'1px'} borderColor='gray.900' >
              <Tab key={index} border={'1px solid'} borderBottom={'0px'} py={1} borderColor='gray.800' borderTopRightRadius={'10'} borderTopLeftRadius={'10'} fontSize={'small'} fontWeight={'500'}>{section}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <HStack flexFlow={'wrap'}>
                  {technologiesBySection[section].map((tech, techIndex) => (
                    <HStack key={techIndex} >
                      <Icon as={tech.icon} boxSize={tech.size} style={{
                        color: getColor(tech.name as ColorType)
                      }} />
                      <Text fontSize={'small'} whiteSpace={'nowrap'}> {tech.name}</Text>
                    </HStack>
                  ))}
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        ))
      ) : (
        <Box p={4}>
          <HStack flexFlow={'wrap'}>
            {Author.technologies.map((tech, techIndex) => (
              <HStack key={techIndex} >
                <Icon as={tech.icon} boxSize={tech.size} style={{
                  color: getColor(tech.name as ColorType)
                }} />
                <Text fontSize={'small'} whiteSpace={'nowrap'}> {tech.name}</Text>
              </HStack>
            ))}
          </HStack>
        </Box>

      )}


    </Box>
  );
};
