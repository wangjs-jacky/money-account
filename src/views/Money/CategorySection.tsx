import styled from "styled-components";

export const CategorySection = styled.section`
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
