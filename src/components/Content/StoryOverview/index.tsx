import React from 'react';
import Author from '@/config/author';
import { Box, Divider, HStack, Heading, Icon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import colors, { ColorType }  from '@/config/colors';


interface Props { }

export function StoryOverview() {

  const workstories = Author['workstories'];
  const educationstories = Author['educationstories'];



  const getColor = (tag: string) => {
    const sanitizeTag = tag.toLowerCase().replace(/[^a-z]/g, '') as ColorType;
    return colors?.[sanitizeTag] || colors.default;
  }

  return (
    <>
      {workstories.map((story, index: number) => (
        <Box key={index} border={'1px solid'} borderColor='gray.700' borderRadius={'10'} p={4}>
          <HStack flexFlow={'wrap'}>
            <Heading as={'h4'} fontSize={'large'} color={'dark.highlight-text'} display={'flex'} gap={2}><Icon as={story.icon} boxSize={4} />{story.label}</Heading>
            <Text fontSize={10} border={'1px solid'} p={1} borderRadius={50}>{story.badge}</Text>
          </HStack>
          <Text fontSize={14} p={1} >{story.description}</Text>
          <UnorderedList fontSize={14} py={4} >
            {story.functions?.map((funct, fIndex) => (
              <ListItem key={fIndex}>{funct}</ListItem>
            ))}
          </UnorderedList>
          <HStack py={4} flexFlow={'wrap'}>
            {story.tags?.map((tech, techIndex) => (
              <HStack key={techIndex} >
                <Box h={'11px'} w={'11px'} borderRadius={50} style={{
                  background: getColor(tech as ColorType)
                }}></Box>
                <Text fontSize={10} whiteSpace={'nowrap'}> {tech}</Text>
              </HStack>
            ))}
          </HStack>
        </Box>
      ))
      }
      <Divider py={4} />
      {educationstories.map((story, index: number) => (
        <Box key={index} border={'1px solid'} borderColor='gray.700' borderRadius={'10'} p={4}>
          <HStack flexFlow={'wrap'}>
            <Heading as={'h4'} fontSize={'large'} color={'dark.highlight-text'} display={'flex'} gap={2}><Icon as={story.icon} boxSize={4} />{story.label}</Heading>
            <Text fontSize={10} border={'1px solid'} p={1} borderRadius={50}>{story.badge}</Text>
          </HStack>
          <Text fontSize={14} p={1} >{story.description}</Text>
          <HStack py={4} flexFlow={'wrap'}>
            {story.tags?.map((tech, techIndex) => (
              <HStack key={techIndex} >
                <Box h={'11px'} w={'11px'} borderRadius={50} style={{
                  background: getColor(tech as ColorType)
                }}></Box>
                <Text fontSize={10} whiteSpace={'nowrap'}> {tech}</Text>
              </HStack>
            ))}
          </HStack>
        </Box>
      ))
      }
    </>
  );
};