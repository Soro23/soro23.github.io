import { StyleFunctionProps } from "@chakra-ui/react";

const components = {
  Button: {
    baseStyle: {
    },
    defaultProps: {
      bg: '#0f0fd3',

    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      fontWeight: 'normal',
      color: props.colorMode === 'dark' ? 'dark.highlight-text' : 'light.highlight-text',
    }),
  },
};

export default components;