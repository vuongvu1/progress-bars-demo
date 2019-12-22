import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

// #region Styles
const activeBorderAnimation = (props) => keyframes`
  0% { border-color: ${props.theme.pink}; }
  50% { border-color: ${props.theme.white}; }
  100% { border-color: ${props.theme.pink}; }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.white};
  position: relative;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.white};
  }

  ${(props) => props.isActive
    && css`
      border: 2px solid;
      animation: ${activeBorderAnimation(props)} 1s infinite;
    `}

  > div:first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Bar = styled.div`
  background-color: ${(props) => (props.value > 100 ? props.theme.error : props.theme.pink)};
  height: 100%;
  width: ${(props) => (props.value > 100 ? 100 : props.value)}%;
  transition: width 300ms, background-color 300ms;
`;
// #endregion Styles

const ProgressBar = ({
  id, value, limit, isActive, setActive,
}) => {
  const percentageValue = Math.round((value * 100) / limit);
  const setActiveBar = () => setActive(id);

  return (
    <Wrapper isActive={isActive} onClick={setActiveBar}>
      <div>{percentageValue}%</div>
      <Bar value={percentageValue} />
    </Wrapper>
  );
};

ProgressBar.defaultProps = {
  value: 0,
  isActive: false,
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  isActive: PropTypes.bool,
  limit: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ProgressBar;
