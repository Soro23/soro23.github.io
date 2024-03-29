import {
    VStack,
    Avatar,
    Text,
    Heading,
    Box,
    useColorModeValue,
    Button,
    useMediaQuery,
    HStack
} from '@chakra-ui/react';
import Author from '@/config/author';
import ReactCountryFlag from 'react-country-flag';
import { ProfileLinks } from '@/components/ProfileLinks';

export function Sidebar() {
    const thighlight = useColorModeValue('light.text2', 'dark.text2')
    const buttonc = useColorModeValue('light.button', 'dark.button')


    const [isMobile] = useMediaQuery("(max-width: 768px)")



    return (
        isMobile ?
            <VStack
                as="div"
                align={"left"}
                boxShadow='2xl'
                w="100vw"
                px={6}
            >
                <HStack >
                    <Avatar
                        w={'100px'}
                        h={'100px'}
                        name={Author.name}
                        src={Author.avatar}
                        showBorder={true}
                        my={4}
                    />
                    <Box px={4} py={2}>
                        <Heading as={'h1'} size={'xl'} fontWeight={'normal'}>{Author.name}</Heading>
                        <Heading as={'h2'} size={'mg'} fontWeight='semibold'>{Author.role}</Heading>
                        <Text as={'span'}>
                            <ReactCountryFlag countryCode={Author.countryCode} svg /> {Author.city}, {Author.country}
                        </Text>
                    </Box>
                </HStack>
                <Box p={4} my={4} border={'1px solid'} borderRadius={'xl'}>
                    <Text as={'span'} color={thighlight}>
                        {Author.description}
                    </Text>
                </Box>
                <Button bg={buttonc} color={thighlight} justifyContent={'flex-start'}>Open to work</Button>
                <Box p={4} >
                    <ProfileLinks></ProfileLinks>
                </Box>
            </VStack>
            :
            <VStack
                as="aside"
                align={"left"}
                boxShadow='2xl'
                h="100vh"
                px={6}
                minW="300"
                maxW="300"
                position={"fixed"}
                left={"0"}
                top={20}
                zIndex={999}
            >
                <Avatar
                    w={'250px'}
                    h={'250px'}
                    name={Author.name}
                    src={Author.avatar}
                    showBorder={true}
                    my={4}
                />
                <Box px={4} py={2}>
                    <Heading as={'h1'} size={'xl'} fontWeight={'normal'}>{Author.name}</Heading>
                    <Heading as={'h2'} size={'mg'} fontWeight='semibold'>{Author.role}</Heading>
                    <Text as={'span'}>
                        <ReactCountryFlag countryCode={Author.countryCode} svg /> {Author.city}, {Author.country}
                    </Text>
                </Box>
                <Box p={4} my={4} border={'1px solid'} borderRadius={'xl'}>
                    <Text as={'span'} color={thighlight}>
                        {Author.description}
                    </Text>
                </Box>
                <Button bg={buttonc} color={thighlight} justifyContent={'flex-start'}>Open to work</Button>
                <Box p={4} >
                    <ProfileLinks></ProfileLinks>
                </Box>
            </VStack>
    )
}