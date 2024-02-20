import React from 'react';
import clsx  from 'clsx';
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
  FaStackOverflow,
} from 'react-icons/fa';
import ScreenConfig from '../../config/screen';

interface Props {
  className?: string;
}

const ProfileLinks: React.FC<Props> = props => {

  const links = [
    {
      link:     'mailto:aitor23.soro@gmail.com',
      icon:     FaRegEnvelope,
      label:    'Mail',
      useTitle: 'Contact Me',
    },
    {
      link:  'https://github.com/soro23',
      icon:  FaGithub,
      label: 'GitHub',
    },
    {
      link:     'https://stackoverflow.com/users/21296801/aitor-sr/',
      icon:     FaStackOverflow,
      label:    'Stack Overflow',
      useTitle: 'StackOverflow/aitor-sr',
    },
    {
      link:     'https://www.linkedin.com/in/aitor-solana-roca/',
      icon:     FaLinkedinIn,
      label:    'LinkedIn',
      useTitle: 'LinkedIn/aitor-solana-roca',
      hidden: false,
    },
  ];

  const renderLinks = links.filter(link => !link.hidden).map(link => {
    const isMail = 'Mail' === link.label;
    const rel    = isMail ? {} : { rel: 'noreferrer', target: '_blank' };
    
    return (
      <a
        key={link.label}
        className="w-full flex font-sans dark:text-textColorDark text-sm mt-[10px]  hover:!text-textColorEmphasis hover:underline transition-all"
        href={link.link}
        {...rel}
      >
        <span className="flex items-center w-[22px] !text-headerTextColor profileLinkText">
          <link.icon size={14} />
        </span>
        {link?.useTitle || link.link}
      </a>
    );
  });

  return (
    <div
      className={clsx(
        'flex mt-4 w-full flex-col items-center',
        ScreenConfig.mobile.alignLeft ? '' : 'max-w-[389px]',
        props?.className || ''
      )}
    >
      {renderLinks}
    </div>
  );
};

export default ProfileLinks;