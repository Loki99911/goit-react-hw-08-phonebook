import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserMenuText = styled.p`
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-right: 10px;
`;
export const UserMenuBtn = styled.button`
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 5px;
  border: 2px solid #000000;
  margin-left: auto;
  background-color: #24d467;
  :hover {
    color: red;
    border-color: red;
  }
`;