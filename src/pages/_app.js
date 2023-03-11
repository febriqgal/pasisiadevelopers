import "@/styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { useSSR } from "@nextui-org/react";
export default function App({ Component, pageProps }) {
  const { isBrowser } = useSSR();
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: "$green200",
        primaryLightHover: "$green300",
        primaryLightActive: "$green400",
        primaryLightContrast: "$green600",
        primary: "#000000",
        primaryBorder: "$green500",
        primaryBorderHover: "$green600",
        primarySolidHover: "$green700",
        primarySolidContrast: "$white",
        primaryShadow: "$green500",

        gradient:
          "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
        link: "#000000",

        // you can also create your own color
        myColor: "#ff4ecd",
        colorDen: "#6432a8",
        myWhite: "#ffffff",

        // ...  more colors
      },
      space: {},
      fonts: {},
    },
  });
  return (
    isBrowser && (
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  );
}
