import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export function SecondBrain() {
  const projects = [
    {
      title: 'CV',
      tecnologies: ['ReactJS', 'NextJS', 'Typescript', 'ChakraUI'],
    },
    {
      title: 'Own Calendar',
      tecnologies: ['Microservices', '...'],
    },
  ];


  return (
    <Box>
      <Heading as={'h2'} fontSize={'large'} display={'flex'} p={2} m={2}>Projects</Heading>

      {projects.map((project, index: number) => (
        <Box key={index} border={'1px solid'} borderColor='gray.700' borderRadius={'10'} p={2} m={2}>
          <HStack flexFlow={'wrap'}>
            <Heading as={'h4'} fontSize={'medium'} color={'dark.highlight-text'} display={'flex'} gap={2}>{project.title}</Heading>
          </HStack>
          <HStack py={4} flexFlow={'wrap'}>
            {project.tecnologies?.map((tech, techIndex) => (
              <HStack key={techIndex} >
                <Text fontSize={10} whiteSpace={'nowrap'}> {tech}</Text>
              </HStack>
            ))}
          </HStack>
        </Box>
      ))
      }
    </Box>
  );
};