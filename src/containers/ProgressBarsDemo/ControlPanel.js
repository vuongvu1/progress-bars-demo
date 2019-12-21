import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressBar from 'components/ProgressBar';

// #region Styles
const Wrapper = styled.div`
  width: 400px;
  background-color: ${(props) => props.theme.lightBlue};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizeBig};
  margin-bottom: 20px;
`;

const BarsWrapper = styled.div`
  width: 100%;

  * {
    margin-bottom: 10px;
  }
`;

const ControlPanelWrapper = styled.div`
  width: 100%;
  text-align: center;

  * {
    margin-right: 5px;
  }
`;
// #endregion Styles


const ControlPanel = ({ barList, buttonList, limitValue }) => {
  const [activeBar, setActiveBar] = useState('');
  const [bars, setBars] = useState(barList);
  const [buttons, setButtons] = useState(buttonList);

  useEffect(() => { setBars(barList); }, [barList]);
  useEffect(() => { setButtons(buttonList); }, [buttonList]);

  const changeValue = useCallback((value) => {
    const newBars = bars.map((bar) => {
      if (activeBar === bar.id) {
        const newValue = bar.data + value;
        return {
          ...bar,
          data: newValue < 0 ? 0 : newValue,
        };
      }
      return bar;
    });
    setBars(newBars);
  }, [activeBar, bars]);

  return (
    <Wrapper>
      <Title>
        {activeBar
          ? `Selected (${activeBar})`
          : 'Select a bar to update'}
      </Title>
      <BarsWrapper>
        {bars.map(({ id, data }) => (
          <ProgressBar
            key={id}
            id={id}
            value={data}
            limit={limitValue}
            isActive={activeBar === id}
            setActive={setActiveBar}
          />
        ))}
      </BarsWrapper>

      <ControlPanelWrapper>
        {buttons.map(({ id, data }) => (
          <input
            key={id}
            type='button'
            value={data > 0 ? `+${data}` : data}
            onClick={() => changeValue(data)}
          />
        ))}
      </ControlPanelWrapper>
    </Wrapper>
  );
};

ControlPanel.defaultProps = {
  barList: [],
  buttonList: [],
  limitValue: 0,
};

ControlPanel.propTypes = {
  barList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.number,
  })),
  buttonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.number,
  })),
  limitValue: PropTypes.number,
};

export default ControlPanel;
