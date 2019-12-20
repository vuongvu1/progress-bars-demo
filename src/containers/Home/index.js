import React from 'react';
import styled from 'styled-components';

// #region Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontSizeBig};
  font-weight: bold;
  height: 100%;
`;
// #endregion Styles

const Home = () => (
  <Wrapper>This is Home Page</Wrapper>
);

export default Home;
