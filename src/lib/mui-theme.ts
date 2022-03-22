import { createTheme } from "@mui/material";

import theme from "../../theme.json";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary.main,
    },
  },
});
