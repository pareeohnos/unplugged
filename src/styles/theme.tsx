import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/shippori-mincho/400.css";
import "@fontsource/shippori-mincho/500.css";
import "@fontsource/shippori-mincho/600.css";
import "@fontsource/shippori-mincho/700.css";
import "@fontsource/shippori-mincho/800.css";

import "@fontsource-variable/work-sans";
import "@fontsource/sue-ellen-francisco";

const baseTheme = createTheme({
  palette: {
    primary: { main: "#FF6D6D" },
    secondary: { main: "#77D7D3" },
    info: { main: "#2E4049" },
  },
});

const theme = createTheme(responsiveFontSizes(baseTheme), {
  palette: {
    cremita: baseTheme.palette.augmentColor({
      color: {
        main: "#F1EEEC",
      },
      name: "cremita",
    }),
    lightBlue: baseTheme.palette.augmentColor({
      color: {
        main: "#ECF1F0",
      },
      name: "lightBlue",
    }),
    lightGray: baseTheme.palette.augmentColor({
      color: {
        main: "#F2F2F2",
      },
      name: "lightGray",
    }),
    lightBlack: baseTheme.palette.augmentColor({
      color: {
        main: "#727272",
      },
      name: "lightBlack",
    }),
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Work Sans Variable"],
    h1: { fontFamily: "Shippori Mincho" },
    h2: { fontFamily: "Shippori Mincho" },
    h3: { fontFamily: "Shippori Mincho" },
    h4: { fontFamily: "Shippori Mincho" },
    h5: { fontFamily: "Shippori Mincho" },
    h6: { fontFamily: "Shippori Mincho" },
    body1: { color: "lightBlack", fontFamily: "Work Sans Variable" },
    button: { fontFamily: "Work Sans Variable", color: "#FFFFFF" },
    poster: {
      fontSize: 50,
      fontFamily: "Sue Ellen Francisco",
    },
  },
});

export default theme;

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}
