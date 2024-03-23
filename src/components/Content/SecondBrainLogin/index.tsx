import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export function SecondBrainLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    // const sbUsername = process.env.SBUSERNAME
    // const sbPassword = process.env.SBPASSWORD
    // if (username === sbUsername && password === sbPassword) {
      router.push('/SecondBrain');
    // }
  };


  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'calc(100vh - 250px)'}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>User</FormLabel>
          <Input type="text"
            placeholder="User"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" onClick={(e) => handleSubmit()}>
          Access
        </Button>
      </Stack >
    </Box>
  );
};
