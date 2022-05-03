import { NavLink } from "react-router-dom";
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
        &.selected{
          color: #3939dc !important;
          .icon{
            fill: #3939dc !important;
          }
        }
      }
    }
  }
`;

export const NavBar = (props: any) => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink
            to="/tags"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <Icon tag="tag"></Icon>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={({ isActive }) => (isActive ? "selected" : "")}>
            <Icon tag="money"></Icon>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({ isActive }) => (isActive ? "selected" : "")}>
            <Icon tag="statistics"></Icon>
            统计页
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};
