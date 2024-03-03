import type { NextPage } from 'next'
import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, useColorMode, useColorModeValue } from '@chakra-ui/react'
import {Soon} from '@/components/Soon';
import {ProfileOverview} from '@/components/Content/ProfileOverview';
import StoryOverview from '@/components/Content/StoryOverview';

const Home: NextPage = () => {

  return (
    <Box w="full" py={10}>
      <Tabs position="relative" variant="unstyled">
        <TabList gap={4}>
          <Tab>Profile</Tab>
          <Tab>Story</Tab>
          <Tab>Code Gist</Tab>
          <Tab>Insight</Tab>
        </TabList>
        <TabIndicator
          height="2px"
          bg="#e08976"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <ProfileOverview />
          </TabPanel>
          <TabPanel>
            <StoryOverview />
          </TabPanel>
          <TabPanel>
            <Soon/>
          </TabPanel>
          <TabPanel>
            <Soon />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Home;