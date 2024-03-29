import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/Home';
import ProgressBarsDemo from 'containers/ProgressBarsDemo';
import PageNotFound from 'containers/PageNotFound';
import GlobalStyle from '../../global-styles';

// #region Styles
const BodyWrapper = styled.section`
  margin-top: 50px;
  height: calc(100vh - 100px);
`;
// #endregion Styles

const App = () => (
  <Fragment>
    <Helmet>
      <title>Progress Bars Demo</title>
      <meta name='description' content='Progress Bars Demo App' />
    </Helmet>

    <Header />
    <BodyWrapper>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/progress-bars-demo' component={ProgressBarsDemo} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </BodyWrapper>
    <Footer />

    <GlobalStyle />
  </Fragment>
);

export default App;
