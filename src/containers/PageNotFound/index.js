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
  color: ${(props) => props.theme.error};
`;
// #endregion Styles

const PageNotFound = () => (
  <Wrapper>
    <span role='img' aria-label='Cross'>
      ❌
    </span>{' '}
    Page Not Found
  </Wrapper>
);

export default PageNotFound;
