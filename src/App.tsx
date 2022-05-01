import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import styled from "styled-components";
import tag from "./icons/money.svg";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
`

const Nav = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  ul{
    display: flex;
    li{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <Main>
        <Routes>
          <Route path="/tags" element={<Tags></Tags>}></Route>
          <Route path="/money" element={<Money></Money>}></Route>
          <Route path="/statistics" element={<Statistics></Statistics>}></Route>
          <Route path="*" element={<Navigate to={"tags"} replace={true} />}></Route>
          {/* <Route path="*" element={<NoMatch></NoMatch>}></Route> */}
        </Routes>
      </Main>
      <Nav>
        <ul>
          <li>
            <img src={tag}></img>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <img src={tag}></img>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <img src={tag}></img>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </Nav>

    </Wrapper>
  );
}

export default App;

function Tags() {
  return (
    <h2>标签页</h2>
  )
}

function Money() {
  return (
    <h2>记账页</h2>
  )
}

function Statistics() {
  return (
    <h2>统计页</h2>
  )
}

function NoMatch() {
  return (
    <h2>404</h2>
  )
}
