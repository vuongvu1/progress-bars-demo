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
  background-color: ${(props) => (props.value > 100 ? props.theme.red : props.theme.pink)};
  height: 100%;
  width: ${(props) => (props.value > 100 ? 100 : props.value)}%;
  transition: width 300ms, background-color 300ms;
`;
// #endregion Styles

const ProgressBar = ({ value, isActive }) => (
  <Wrapper isActive={isActive}>
    <div>{value}%</div>
    <Bar value={value} />
  </Wrapper>
);

ProgressBar.defaultProps = {
  value: 0,
  isActive: false,
};

ProgressBar.propTypes = {
  value: PropTypes.number,
  isActive: PropTypes.bool,
};

export default ProgressBar;
