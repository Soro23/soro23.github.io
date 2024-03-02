import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillHeart } from "react-icons/ai";


export function Soon() {
  return (
    <Box
      display={'flex'}
      alignItems={'center'} 
      justifyContent={'center'}
      gap={2}
      p={10}>
      <AiFillHeart fill="#cd3c1a" size={18} />
      <Text>
        Comming Soon
      </Text>
    </Box>
  );
};
