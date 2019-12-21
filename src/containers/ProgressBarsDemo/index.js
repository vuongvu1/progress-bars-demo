import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
  barListSelector,
  buttonListSelector,
  limitValueSelector,
  loadingSelector,
} from './selectors';
import { fetchBarsDataAction } from './actions';
import ControlPanel from './ControlPanel';

// #region Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
// #endregion Styles

const ProgressBarsDemo = () => {
  const dispatch = useDispatch();

  const barList = useSelector(barListSelector);
  const buttonList = useSelector(buttonListSelector);
  const limitValue = useSelector(limitValueSelector);
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(fetchBarsDataAction());
  }, [dispatch]);

  return (
    <Wrapper>
      {isLoading
        ? 'Loading...'
        : (
          <ControlPanel
            barList={barList}
            buttonList={buttonList}
            limitValue={limitValue}
          />
        )}
    </Wrapper>
  );
};

export default ProgressBarsDemo;
