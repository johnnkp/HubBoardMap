import { extendTheme } from "@chakra-ui/react";

const overrides = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  sizes: {
    container: {
      xl: "1680px",
    },
  },
};

export default extendTheme(overrides);
