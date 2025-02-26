import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/glogal";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>;
}

export default App;
