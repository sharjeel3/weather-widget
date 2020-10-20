import React from 'react';
import { Home } from './components/Home';
import { createGlobalStyle } from 'styled-components';
import { globalStyles } from './app/styles/global';

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;

GlobalStyles.displayName = 'GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
