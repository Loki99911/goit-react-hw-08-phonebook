import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;

export const HomeTitle = styled.h1`
  font-size: 36px;
  font-family: 'Caveat', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;

export const HomeContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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