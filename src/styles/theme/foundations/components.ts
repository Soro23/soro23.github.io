import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

export default {
  Button: {
    baseStyle: (props: StyleFunctionProps) => ({
      dialog: {
        bg: mode('white', 'red')(props),
      },
    }),
  },
};

