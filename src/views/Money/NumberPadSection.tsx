import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 50px;
      border: none;
      &.ok {
        height: 100px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(12) {
        background: #9a9a9a;
      }
      &:nth-child(14) {
        background: #a9a9a9;
      }
    }
  }
`;

const handleText = (text: string, output = "0") => {
  switch (text) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (output === "0") {
        return text;
      } else {
        return output + text;
      }
    case "删除":
      if (output.length === 1) {
        return "0";
      } else {
        return output.slice(0, -1);
      }
    case "清空":
      return "0";
    case "OK":
      console.log(output);
      return output;
    case ".":
      if (output.indexOf(".") >= 0) {
        return output;
      }
      return output + ".";
    default:
      return "";
  }
};

export const NumberPadSection: React.FC = (props) => {
  const [output, setOutput] = useState("100");
  const onClickButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).innerHTML;
    setOutput(handleText(text, output));
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButton}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};
