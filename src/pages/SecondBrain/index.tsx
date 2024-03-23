import { Box, Divider, HStack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import type { NextPage } from 'next'

const SecondBrain: NextPage = () => {
  const projects = [
    {
      title: 'Pathpocket',
      description: 'Pathfinder charactersheet online',
      tecnologies: ['ReactJS', 'NextJS', 'Typescript', 'ChakraUI', 'Firebase'],
    },
    {
      title: 'Caminando por Japón',
      description: 'Blog with latest news from japan',
      tecnologies: ['Wordpress'],
    }, {
      title: 'CV',
      description: '',
      tecnologies: ['ReactJS', 'NextJS', 'Typescript', 'ChakraUI'],
    }, {
      title: 'Own Calendar',
      description: '',
      tecnologies: ['Microservices', '...'],
    }
  ];
  const projectsInMind = [
    {
      title: 'Cripto Currency checker',
      description: '',
      tecnologies: [''],
    },
    {
      title: 'Link Shortener',
      description: '',
      tecnologies: [''],
    },
    {
      title: 'Catalogo de Componentes',
      description: '',
      tecnologies: [''],
    },
    {
      title: 'Listado de CheatSheets',
      description: '',
      tecnologies: [''],
    },
  ];
  const tools = [
    {
      title: 'Trello',
      description: 'Pathfinder charactersheet online',
      url: 'https://trello.com/',
    },
  ];


  return (
    <Box w={'100vw'} p={4}>
      <Heading as={'h2'} fontSize={'large'} display={'flex'} p={2} m={2}>Projects</Heading>

      {projects.map((project, index: number) => (
        <Box key={index} border={'1px solid'} borderColor='gray.700' borderRadius={'10'} p={2} m={2}>
          <HStack flexFlow={'wrap'}>
            <Heading as={'h4'} fontSize={'medium'} color={'dark.highlight-text'} display={'flex'} gap={2}>{project.title}</Heading>
          </HStack>
          <Text fontSize={14} py={1} >{project.description}</Text>
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
      <Divider />
      <Heading as={'h2'} fontSize={'large'} display={'flex'} p={2} m={2}>Projects In Mind</Heading>
      {projectsInMind.map((project, index: number) => (
        <Box key={index} border={'1px solid'} borderColor='gray.700' borderRadius={'10'} p={2} m={2}>
          <HStack flexFlow={'wrap'}>
            <Heading as={'h4'} fontSize={'medium'} color={'dark.highlight-text'} display={'flex'} gap={2}>{project.title}</Heading>
          </HStack>
          <Text fontSize={14} py={1} >{project.description}</Text>
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
      <Divider />
      <Heading as={'h2'} fontSize={'large'} display={'flex'} p={2} m={2}>Tools</Heading>
      {tools.map((tool, index: number) => (
        <Box key={index} border={'1px solid'} borderColor='gray.700' borderRadius={'10'} p={2} m={2}>
          <HStack flexFlow={'wrap'}>
            <Heading as={'h4'} fontSize={'medium'} color={'dark.highlight-text'} display={'flex'} gap={2}>{tool.title}</Heading>
          </HStack>
          <Text fontSize={14} py={1} >{tool.description}</Text>
          <Text fontSize={14} py={1} >{tool.url}</Text>
        </Box>
      ))
      }
    </Box>
  );
};

export default SecondBrain;