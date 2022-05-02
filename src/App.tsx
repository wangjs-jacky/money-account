import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { Tags } from "views/Tags";
import { Money } from "views/Money";
import { Statistics } from "views/Statistics";
import { NoMatch } from "views/NoMatch";
import { Tag } from "views/Tag";

const Nav = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  padding: 5px 0 5px 0;
  ul {
    display: flex;
    li {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

function App() {
  return (
    <Routes>
      <Route path="/tags" element={<Tags></Tags>}></Route>
      <Route path="/tags/:tagId" element={<Tag></Tag>}></Route>
      <Route path="/money" element={<Money></Money>}></Route>
      <Route path="/statistics" element={<Statistics></Statistics>}></Route>
      {/* <Route path="/" element={<Navigate to={"/tags"} />}></Route> */}
      <Route path="*" element={<NoMatch></NoMatch>}></Route>
    </Routes>
  );
}

export default App;
