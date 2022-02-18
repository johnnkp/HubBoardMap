import {createTheme} from "@mui/material/styles";
import {orange} from "@mui/material/colors";
/* Apple San Francisco Pro font */
import SFProDisplayRegular from "./font/SF-Pro-Display-Regular.otf";
import SFProDisplayMedium from "./font/SF-Pro-Display-Medium.otf";


const theme = createTheme({
    typography: {
        fontFamily: 'sf_pro_display_regular, sf_pro_display_medium',
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
                    src: "local('SF-Pro-Display-Regular'), url(${SFProDisplayRegular}) format('otf')";
                }

                @font-face {
                    font-family: 'sf_pro_display_medium';
                    src: "local('SF-Pro-Display-Medium'), url(${SFProDisplayMedium}) format('otf')";
                }
            `,
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
