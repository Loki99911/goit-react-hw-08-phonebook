import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  justify-content: center;
`;
export const RegisterTitle = styled.h1`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;

export const RegisterForm = styled.form`
  display: flex;
  gap:5px;
  margin: 0 auto;
  flex-direction: column;
  width: 30%;
`;

export const RegisterLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const RegisterFild = styled.input`
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

export const RegisterBtn = styled.button`
  font-weight: bold;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #35e6d6;
  margin: 0 auto;
  margin-top: 15px;
  color: #35e6d6;
  background-color: transparent;
  :hover {
    color: black;
    background-color: #35e6d6;
  }
`;



