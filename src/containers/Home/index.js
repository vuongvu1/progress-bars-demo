import React from 'react';
import styled from 'styled-components';

// #region Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  height: 100%;
`;
// #endregion Styles

const Home = () => (
  <Wrapper>This is Home</Wrapper>
);

export default Home;
