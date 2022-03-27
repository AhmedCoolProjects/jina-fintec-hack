import { useEffect, useMemo } from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer, Header } from "../parts";
import { IMAGES, THEME } from "../../constants";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  const { children } = props;
  // check if the user is connected

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        {children}
        {/* <Footer /> */}
      </Container>
    </ThemeProvider>
  );
}
