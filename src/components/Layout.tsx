import styled from "styled-components";
import { NavBar } from "./NavBar";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <NavBar></NavBar>
    </Wrapper>
  );
};
