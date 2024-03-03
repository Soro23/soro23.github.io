import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
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