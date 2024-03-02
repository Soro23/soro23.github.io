import { Flex, useBreakpointValue, IconButton, Icon, Divider, useColorModeValue, useColorMode, Button, Box, Link } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi';
import Author from '../../../config/author'
export function Header() {
    //   const { onOpen } = useSidebarDrawer();
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('light.highlight-bg', 'dark.highlight-bg')

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            align="center"
            position={"sticky"}
            top={"0"}
            bgColor={bg}
            boxShadow='sm'
            zIndex={99}
            flexDir={'row'}
            px={4}
        >
            <Box flex={1}>
                {Author.site}
            </Box>
            <Box as='button' onClick={toggleColorMode} flex={1} display={'flex'} flexDir={'row-reverse'}>
                {colorMode === 'dark' ? <FiSun size={24} fill="#fff" /> : <FiMoon size={24} />}
            </Box>
            <Flex align="center" ml="auto" pr="4">
                <Divider orientation='vertical' my="8" mx="4" />
            </Flex>
        </Flex>
    );
}