import styled from "styled-components";

export const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 50px;
      background: none;
      border: none;
    }
  }
`;
