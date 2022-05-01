/* PROGRAM theme.js - Global MUI theme configuration
 * PROGRAMMER: johnnkp and SzelamC
 * VERSION 1: written 22-03-2022
 * Revision 1.1: 01-05-2022 code clean up
 * PURPOSE: Create default theme in addition to
 *          global.module.css for global style use.
 * DATA STRUCTURE:
 * import createTheme, orange - @mui/material
 * import SFProDisplayRegular - Apple San Francisco Pro font
 * Variable theme - export default const
 *
 * CONFIGURATION:
 * button font: weight = 600, size = 1em
 * font: add sf_pro_display_regular
 * MuiCheckbox: use hOrange color
 * MuiTextField: use hOrange color
 * palette: add hOrange color
 * responsive width breakpoints:
 *  xs: <600px (pixel)
 *  sm: <785px
 *  md (Mobile): <870px
 *  lg (FHD): <1300px
 *  xl (QHD): 1300px+ */

import {createTheme} from "@mui/material/styles";
import {orange} from "@mui/material/colors";
import SFProDisplayRegular from "./fonts/SF-Pro-Display-Regular.woff2";

const theme = createTheme({
  typography: {
    // add font-family name in array
    fontFamily: ["sf_pro_display_regular", "Roboto"].join(","),
    // sample code to add variant
    // poster: {
    //   color: "red",
    //   fontFamily: "filson_soft_regular",
    // },
    button: {
      fontWeight: 600,
      fontSize: "1em",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 785, // Mobile
      lg: 870, // FHD
      xl: 1300, // QHD
    },
  },
  palette: {
    hOrange: {
      main: orange[500],
      contrastText: "#fff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `        
      @font-face {
          font-family: 'sf_pro_display_regular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${SFProDisplayRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }`,
      // sample code to add font-family
      // , `
      // @font-face {
      //     font-family: 'filson_soft_regular';
      //     font-style: normal;
      //     font-display: swap;
      //     font-weight: 400;
      //     src: url(${FilsonSoftRegular}) format('woff2');
      //     unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      //   }`
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: orange[500],
          "&.Mui-checked": {
            color: orange[500],
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: orange[500],
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: orange[400],
            },
            "&.Mui-focused fieldset": {
              borderColor: orange[500],
            },
          },
        },
      },
    },
  },
});

export default theme;
