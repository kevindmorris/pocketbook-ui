"use client";

import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: blue[500] },
    secondary: { main: purple[500] },
  },
});

export default theme;
