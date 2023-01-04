import styled from 'styled-components';

export const FormBlock = styled.form`
  display: flex;
  gap: 5px;
  margin: 0 auto;
  flex-direction: column;
  width: 30%;
`;

export const FormTitle = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FormInput = styled.input`
  margin-left: 20px;
  height: 25px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #35e6d6;
  background-color: rgba(255, 255, 255, 0.35);
  :focus {
    border: 1px solid #35e6d6;
  }
`;

export const FormBtn = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #35e6d6;
  margin: 0 auto;
  margin-top: 15px;
  color: #35e6d6;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: black;
    background-color: #35e6d6;
  }
`;
