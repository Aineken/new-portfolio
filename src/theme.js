import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[500],
      light: red[100],
    },
  },
  typography: {
    fontSize: 14,
  },
});

export default theme;
