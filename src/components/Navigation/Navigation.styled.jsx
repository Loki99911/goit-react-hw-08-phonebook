import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.header`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 8px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #35e6d6;
  font-weight: 500;
  border: 1px solid #35e6d6;
   &.active {
    color: black;
    background-color: #35e6d6;
  }
`;
