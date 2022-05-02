import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      white-space: nowrap;
      padding-right: 16px;
    }
    > input {
      padding-left: 10px;
      display: block;
      width: 100%;
      height: 50px;
      background: none;
      border: none;
    }
  }
`;

export const NotesSection: React.FC = (props) => {
  const [note, setNote] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote((e.target as HTMLInputElement).value);
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注" onChange={onChange} />
      </label>
    </Wrapper>
  );
};
