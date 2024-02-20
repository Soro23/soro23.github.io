import { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  const bg = useColorModeValue('gray.50', 'gray.800')
  return (
    <Flex direction="row">
      <Flex direction="column" w="full">
        <Header />
        <Flex id="bb" 
          bgColor={bg}
          minH={"100vh"} 
          direction={'row'}
          justify={'center'}
          >
          <Sidebar />
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}