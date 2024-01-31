"use client";
import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: blue[800] },
    secondary: { main: purple[800] },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },
});

export default theme;
