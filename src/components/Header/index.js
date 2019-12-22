import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// #region Styles
const Wrapper = styled.header`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
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
      }

      &:first-child {
        flex: 0 0 auto;
        width: 20%;
        font-weight: bold;
        a {
          color: ${(props) => props.theme.darkBlue};
        }
      }
      &:nth-child(2) {
        flex: 1 1 auto;
        a {
          color: ${(props) => props.theme.white};
          margin-right: 20px;

          &:hover {
            color: ${(props) => props.theme.darkBlue};
          }
        }
      }
      &:last-child {
        flex: 0 0 auto;
      }
    }
  }
`;
// #endregion Styles

const Header = () => (
  <Wrapper data-cy='header'>
    <ul>
      <li>
        <NavLink exact to='/'>
          <span role='img' aria-label='Star'>⭐</span> Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to='/progress-bars-demo'>Progress Bars Demo</NavLink>
        <NavLink exact to='/error'>Error Page</NavLink>
      </li>
      <li>Hi, Anonymous</li>
    </ul>
  </Wrapper>
);

export default Header;
