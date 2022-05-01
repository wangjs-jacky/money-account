import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "./Icon";

const Nav = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  padding: 5px 0 5px 0;
  ul {
    display: flex;
    li {
      flex-grow: 1;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export const NavBar = (props: any) => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/tags">
            <Icon tag="tag"></Icon>
            标签页
          </Link>
        </li>
        <li>
          <Link to="/money">
            <Icon tag="money"></Icon>
            记账页
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon tag="statistics"></Icon>
            统计页
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
