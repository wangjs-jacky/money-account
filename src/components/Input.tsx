import styled from "styled-components";

// 如何封装一个原生的组件 <Input label="标签名" type="text" placeholder="标签名" value={tagName}></Input>
// 1. ts 继承原生组件的属性
// 语法是： &
// 原生默认属性，如input =》 React.InputHTMLAttributes<HTMLInputElement>
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Label = styled.label`
  margin-top: 10px;
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
    white-space: nowrap;
  }
  > input {
    border: 1px solid #000 !important;
    border-radius: 8px;
    display: block;
    padding-left: 5px;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
  }
`;

// 2. 将 rest 属性筛选出来
export const Input: React.FC<Props> = (props) => {
  const { label, children, ...rest } = props;
  return (
    <Label>
      <span>{label}</span>
      <input {...rest} />
    </Label>
  );
};
