import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import palette from "./foundations/palette";
import typography from "./foundations/typography";
import components from "./foundations/components";

export default extendTheme({
  styles,
  colors: palette,
  fonts: typography,
  components,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});