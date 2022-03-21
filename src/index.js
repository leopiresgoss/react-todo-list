import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import TodoContainer from "./components/TodoContainer"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<TodoContainer />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotMatch />}></Route>  
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
