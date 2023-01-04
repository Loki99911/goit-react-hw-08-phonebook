import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserMenuText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-right: 10px;
  color: #35e6d6;
`;

export const UserMenuBtn = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #35e6d6;
  margin: 0 auto;
  color: #35e6d6;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: black;
    background-color: #35e6d6;
  }
`;