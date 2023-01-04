import styled from 'styled-components';

export const FilterTitle = styled.label`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const FilterInput = styled.input`
  margin-left: 20px;
  height: 25px;
  width: 20vw;
  border-radius: 5px;
  border: 1px solid #35e6d6;
  background-color: rgba(255, 255, 255, 0.35);
  :focus {
    border: 1px solid #35e6d6;
  }
`;
