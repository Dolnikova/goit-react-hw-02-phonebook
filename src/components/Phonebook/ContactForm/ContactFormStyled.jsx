import styled from 'styled-components';

export const FormContainer = styled.form`
  border: 1px solid black;
  width: 320px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 10px;
`;

export const InputForm = styled.input`
  margin: 5px 0 15px;
`;
export const Button = styled.button`
  width: 40%;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  border-radius: 5px;
  border: none;
  border: 1px solid black;
  cursor: pointer;
  background-color: grey;
  :hover,
  :focus {
    background-color: blue;
  }
`;
