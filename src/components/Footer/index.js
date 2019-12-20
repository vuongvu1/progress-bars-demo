import React from 'react';
import styled from 'styled-components';

// #region Styles
const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  width: 100%;
  padding: 0 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// #endregion Styles

const Footer = () => (
  <Wrapper>This is Footer</Wrapper>
);

export default Footer;
