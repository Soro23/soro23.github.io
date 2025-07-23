import { ReactNode } from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { useMediaQuery } from "@chakra-ui/react"
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const router = useRouter();

  // Excluir la página NoLayoutPage del diseño
  const excludeFromLayout = router.pathname === '/cv';
  const [isSmallScreen] = useMediaQuery("screen and (max-width: 768px)");

  return (
    !excludeFromLayout ?
      (isMobile ?
        <Flex direction="row">
          <Flex direction="column" w="full">
            <Header />
            <Sidebar />
            <Flex id="main-content"
              minH={"100vh"}
              direction={'row'}
              justify={'center'}
              w={'100vw'}
              px={6}
            >
              {children}

            </Flex>
          </Flex>
        </Flex>
        :
        <Flex direction="row">
          <Flex direction="column" w="full">
            <Header />
            <Sidebar />
            <Flex id="main-content"
              minH={"100vh"}
              direction={'row'}
              justify={'center'}
              w={'calc(100% - 300px)'}
              ml={'300px'}
            >
              {children}

            </Flex>
          </Flex>
        </Flex>
      ) :
      <Flex direction="row" bg={'gray.800'}>
        <Box p={16} maxW="21cm" mx="auto" position={'relative'} bg={'white'} id="cv-to-print"
          _before={{
            content: `""`,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            // bg: "gray.900",
            opacity: "0.2",
            bgImage: './cv_bg.png',
            bgRepeat: 'no-repeat',
            bgSize: 'cover',
            bgBlendMode: 'luminosity',
          }} display={isSmallScreen ? 'none' : 'block'}>
          {children}
        </Box>
        {isSmallScreen &&
          <Box p={16} w={'100vw'} h={'100vh'} mx="auto" alignItems={'center'} display={'flex'} justifyContent={'center'}>
            <Link fontSize={50}  href='https://soro23.github.io' >GO HOME</Link>
          </Box>}
      </Flex>

  );
}
