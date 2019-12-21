import React, { useState } from 'react';
import styled from 'styled-components';

import ProgressBar from 'components/ProgressBar';

// #region Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  > div {
    width: 400px;
    height: 200px;
    background-color: ${(props) => props.theme.lightBlue};
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
// #endregion Styles

const ProgressBarsDemo = () => {
  const [value, setValue] = useState(40);

  return (
    <Wrapper>
      <div>
        <ProgressBar value={value} isActive />
        <ProgressBar value={35} />
        <input type='button' value='+10' onClick={() => setValue(value + 10)} />
        <input type='button' value='-10' onClick={() => setValue(value - 10)} />
      </div>
    </Wrapper>
  );
};

export default ProgressBarsDemo;
