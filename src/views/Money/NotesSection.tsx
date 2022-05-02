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

type Props = {
  value: string;
  onChange: (x: string) => void;
};

export const NotesSection: React.FC<Props> = ({ value, onChange }) => {
  let note = value;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange((e.target as HTMLInputElement).value);
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          value={note}
          placeholder="在这里添加备注"
          onChange={onInputChange}
        />
      </label>
    </Wrapper>
  );
};
