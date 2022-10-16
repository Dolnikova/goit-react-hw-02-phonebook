import styled from 'styled-components';
export const List = styled.li`
  display: inline-flex;
  justify-content: space-between;
  min-width: 70%;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const ButtonDelete = styled.button`
  line-height: 1.15;
  border-radius: 5px;
  border: none;
  border: 1px solid black;
  cursor: pointer;
  background-color: #cc9797;
  :hover,
  :focus {
    background-color: red;
  }
`;
