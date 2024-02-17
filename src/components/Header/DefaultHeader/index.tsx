import React         from 'react';
import { VscOutput } from "react-icons/vsc";
import {
  FaLaptopCode,
  FaRegLightbulb,
} from "react-icons/fa";
import { GoRepo } from "react-icons/go";

import TabMenu         from '../../TabMenu';
import PinnedProjects  from '../../Content/PinnedProjects';
import ProfileOverview from '../../Content/ProfileOverview';
import StoryOverview from '../../Content/StoryOverview';
import Soon from '../../Soon';

interface Props {}

const Header: React.FC<Props> = () => {

    const menus = [
    {
      icon:    VscOutput,
      link:    '/',
      label:   'Profile',
      content: (
        <React.Fragment>
          <ProfileOverview />
          {/* <PinnedProjects /> */}
           {/* <Footer /> */}
        </React.Fragment>
      )
    },
    {
      icon:    GoRepo,
      link:    '/',
      label:   'Story',
      count:   20,
      content: (
        <React.Fragment>
          <StoryOverview />
        </React.Fragment>
      ),
    },
    {
      icon:    FaLaptopCode,
      link:    '/',
      label:   'Code Gist',
      count:   20,
      content: (
        <React.Fragment>
          <Soon />
        </React.Fragment>
      ),
    },
    {
      icon:    FaRegLightbulb,
      link:    '/',
      label:   'Insight',
      count:   25,
      content: (
        <React.Fragment>
          <Soon />
        </React.Fragment>
      ),
    },
  ];

  return (
    <div className="w-full order-2 md:order-none flex flex-col items-center justify-start px-[15px] md:pl-[5px] md:pr-[30px]">
      <div className="flex-none w-[296px] hidden md:block"></div>
      
      <TabMenu menus={menus} className="mt-[30px]" />
    </div>
  );
};

export default Header;