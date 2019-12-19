import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import GlobalStyle from '../../global-styles';

//#region Styles
const AppWrapper = styled.div`
  max-width: 768px;
`;
//#endregion Styles

const App = () => {

  return (
    <AppWrapper>
      <Helmet>
        <title>Progress Bars Demo</title>
        <meta name="description" content="Progress Bars Demo App" />
      </Helmet>

      <div>Hello new app!!</div>

      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
