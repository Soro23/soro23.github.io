import Flags from 'country-flag-icons/react/3x2'; 

interface AuthorType {
  site:        string;
  role:        string;
  name:        string;
  avatar:      string;
  country:     string;
  city:        string;
  description: string;
  countryCode: keyof typeof Flags;
}

const Author: AuthorType = {
  site:         '<aitorsolana.dev />',
  name:         'Aitor Solana',
  role:         'Backend Developer',
  avatar:       'https://avatars.githubusercontent.com/u/57442992',
  city:         'Barcelona',
  country:      'Spain',
  countryCode:  'ES', // https://www.npmjs.com/package/country-flag-icons
  description:  'Software Engineer, Backend Developer, PHP Expert, Magento 2 Enthusiast',
};

export default Author;