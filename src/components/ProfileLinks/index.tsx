import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaRegEnvelope,
  FaStackOverflow,
} from 'react-icons/fa';

export function ProfileLinks() {
  const text = useColorModeValue('light.text2', 'dark.text2')

  const links = [
    {
      link: 'mailto:aitor23.soro@gmail.com',
      icon: FaRegEnvelope,
      label: 'Mail',
      useTitle: 'Contact Me',
    },
    {
      link: 'https://github.com/soro23',
      icon: FaGithub,
      label: 'GitHub',
    },
    {
      link: 'https://stackoverflow.com/users/21296801/aitor-sr/',
      icon: FaStackOverflow,
      label: 'Stack Overflow',
      useTitle: 'StackOverflow/aitor-sr',
    },
    {
      link: 'https://www.linkedin.com/in/aitor-solana-roca/',
      icon: FaLinkedinIn,
      label: 'LinkedIn',
      useTitle: 'LinkedIn/aitor-solana-roca',
      hidden: false,
    },
  ];

  const renderLinks = links.filter(link => !link.hidden).map(link => {
    const isMail = 'Mail' === link.label;
    const rel = isMail ? {} : { rel: 'noreferrer', target: '_blank' };

    return (
      <Link
        key={link.label}
        href={link.link}
        display={'flex'}
        alignItems={'center'}
        gap={2}
        color={text}
        py={1}
        {...rel}
      >
        <link.icon size={14} />{link?.useTitle || link.link}
      </Link>
    );
  });

  return (
    <Box>
      {renderLinks}
    </Box>
  );
};