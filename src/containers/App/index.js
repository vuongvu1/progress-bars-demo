import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/Home';
import ProgressBarsDemo from 'containers/ProgressBarsDemo';
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

      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/progress-bars-demo" component={ProgressBarsDemo} />
      </Switch>
      <Footer />

      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
