import React from 'react';
import Link from 'next/link';
import AuthorConfig from '../../config/author';
import { AiFillHeart } from "react-icons/ai";

interface Props { }

const Soon: React.FC<Props> = props => {

  return (
    <React.Fragment>
      <div className="profile-overview w-full flex items-center justify-start my-7 mx-auto">
       <div className="w-full flex items-center font-sans dark:text-headerTextColor text-sm justify-center mt-[100px]">
          <span className="mx-[5px]">
            <AiFillHeart fill="#cd3c1a" size={18} />
          </span>
          Comming Soon
        </div>
      </div>
    </React.Fragment>
  );
};

export default Soon;