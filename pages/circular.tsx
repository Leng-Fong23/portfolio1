import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { lime, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ce93d8",
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <ThemeProvider theme={theme}>
        <CircularProgress color="primary" variant="determinate" value={25}>
          <Typography variant="caption" component="div" color="primary">
            25%
          </Typography>
        </CircularProgress>

        <CircularProgress color="success">
          <Typography variant="caption" component="div" color="textSecondary">
            Loading...
          </Typography>
        </CircularProgress>

        <CircularProgress color="inherit">
          <Typography variant="caption" component="div" color="textSecondary">
            Custom Text
          </Typography>
        </CircularProgress>
      </ThemeProvider>
    </Stack>
  );
}
