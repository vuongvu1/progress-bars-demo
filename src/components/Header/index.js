import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// #region Styles
const Wrapper = styled.header`
  background-color: #20232a;
  color: #ffffff;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 20px;
  height: 50px;

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    user-select: none;
    height: 100%;

    > li {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        text-decoration: none;
        font-weight: bold;
      }

      &:first-child {
        flex: 0 0 auto;
        width: 20%;
        a { color: #61dafb; }
      }
      &:nth-child(2) {
        flex: 1 1 auto;
        a { color: #ffffff; }
      }
      &:last-child {
        flex: 0 0 auto;
      }
    }
  }
`;
// #endregion Styles

const Header = () => (
  <Wrapper>
    <ul>
      <li>
        <NavLink exact to='/'>
          <span role='img' aria-label='Star'>⭐</span> Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to='/progress-bars-demo'>Progress Bars Demo</NavLink>
      </li>
      <li>Hi, Anonymous</li>
    </ul>
  </Wrapper>
);

export default Header;
