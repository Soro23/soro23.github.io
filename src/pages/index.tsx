import type { NextPage } from 'next'
import { Box, useColorMode } from '@chakra-ui/react'

const Home: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box w="full">
          {colorMode}
        </Box>
    )
}

export default Home;