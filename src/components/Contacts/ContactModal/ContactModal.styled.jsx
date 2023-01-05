import styled from 'styled-components';

export const ModalWraper = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

// export const Modal = styled.div`
//   width: 30%;
//   height: 500px;
//   border: 1px solid #35e6d6;
//   border-radius: 5px;
//   background-color: #ffffff;
// `;

export const Modal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
  padding: 10px;
  width: 30%;
  border: 1px solid #35e6d6;
  border-radius: 5px;
  background-color: #e48913;
`;

export const ModalTitle = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ModalInput = styled.input`
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

export const ModalBtn = styled.button`
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