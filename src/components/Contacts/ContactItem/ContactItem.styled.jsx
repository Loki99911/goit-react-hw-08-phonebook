import styled from 'styled-components';

export const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ItemBtnEdit = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #35e6d6;
  color: #35e6d6;
  background-color: transparent;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    color: #0400ff;
    border-color: #0400ff;
    background-color: #35e6d6;
  }
`;

export const ItemBtnDelete = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #35e6d6;
  color: #35e6d6;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: red;
    border-color: red;
    background-color: #35e6d6;
  }
`;
