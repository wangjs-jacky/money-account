import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World!
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
      </Routes>
    </div>
  );
}

export default App;

function Home(){
  return(
    <h2>Home</h2>
  )
}

function About(){
  return(
    <h2>About</h2>
  )
}

function Users(){
  return(
    <h2>Users</h2>
  )
}
