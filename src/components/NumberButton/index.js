import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// #region Styles
const Wrapper = styled.button`
  width: 60px;
  background: ${(props) => props.theme.white};
  border-radius: 3px;
  color: ${(props) => (props.isPositive ? props.theme.success : props.theme.error)};
  font-weight: bold;
  margin: 10px;
  padding: 6px 10px;
  cursor: pointer;
  transition: transform 100ms;

  &:hover {
    transform: scale(1.1);
  }
`;
// #endregion Styles

const NumberButton = ({ value, updateValue }) => {
  const isPositive = value > 0;
  const handleOnClick = () => updateValue(value);

  return (
    <Wrapper onClick={handleOnClick} isPositive={isPositive}>
      {isPositive ? `+${value}` : value}
    </Wrapper>
  );
};

NumberButton.propTypes = {
  value: PropTypes.number.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default NumberButton;
