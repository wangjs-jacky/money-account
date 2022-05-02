import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 20px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      flex: 1;
      text-align: center;
      padding: 13.5px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Category = "-" | "+";

type Props = {
  value: Category;
  onChange: (x: Category) => void;
};

export const CategorySection: React.FC<Props> = ({ value, onChange }) => {
  // 准备 Hash 字典
  const categoryMap = { "-": "支出", "+": "收入" };
  // 使用 type 联合字符串
  type Y = keyof typeof categoryMap;
  const [categoryList] = useState<Y[]>(["-", "+"]);
  let selectedCategory = value;
  const onTypeChange = (category: Category) => {
    onChange(category);
  };
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            key={c}
            className={selectedCategory === c ? "selected" : ""}
            onClick={() => onTypeChange(c)}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
