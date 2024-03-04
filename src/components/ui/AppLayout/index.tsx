import { ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { useMediaQuery } from "@chakra-ui/react"

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {


  const [isMobile] = useMediaQuery("(max-width: 768px)")

  return (
    isMobile ?
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
  );
}