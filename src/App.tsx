import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import Users from "./pages/users";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Users />
      </ThemeProvider>
    </div>
  );
};

export default App;
