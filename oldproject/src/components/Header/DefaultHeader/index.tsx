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
import ProgressBar from '../../ProgressBar';
import Soon from '../../Soon';
import StoryOverview from '../../Content/StoryOverview';
import { CircularProgress } from '../../CircularProgress';

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
          {/* <CircularProgress percentage={55} colour='#38bdf8' />
          <ProgressBar
                bgcolor="orange"
                progress="30"
                height={30}
            />
            <ProgressBar
                bgcolor="red"
                progress="60"
                height={30}
            />
            <ProgressBar
                bgcolor="#99ff66"
                progress="50"
                height={30}
            />
            <ProgressBar
                bgcolor="#ff00ff"
                progress="85"
                height={30}
            />
            <ProgressBar
                bgcolor="#99ccff"
                progress="95"
                height={30}
            /> */}
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