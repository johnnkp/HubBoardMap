import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    hOrange: {
      main: orange[500],
      contrastText: "#fff",
    },
  },
  components: {
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
