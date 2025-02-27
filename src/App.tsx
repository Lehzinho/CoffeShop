import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/glogal";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCart";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ShoppingCartProvider>
    </ThemeProvider>
  );
}
