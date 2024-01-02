import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


const App =() => {
  const pageSize=6;
  const apiKey="cc3f8c75bcca422489124bb748a36a8d"
 
    return (
      
      <div>
        <Router>
        <Navbar/>
       


        <Routes>
          <Route exact apiKey = {apiKey} path="/" element={< News  key='general' pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact apiKey = {apiKey} path="/business" element={ <News key='business'  pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact apiKey = {apiKey} path="/entertainment" element={<News key='entertainment'  pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact apiKey = {apiKey} path="/general" element={ <News key='genera'  pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact apiKey = {apiKey} path="/health" element={ <News key='health'  pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact apiKey = {apiKey} path="/science" element={ <News key='science'  pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact apiKey = {apiKey} path="/sports" element={ <News key='sports'  pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact apiKey = {apiKey} path="/technology" element={ <News  key='technology' pageSize={pageSize} country="in" category="technology"/>}></Route>
          <Route exact apiKey = {apiKey} path="/about" element={ <News  key='t' pageSize={pageSize} country="in" category="general"/>}></Route>

        </Routes>
        </Router>
      </div>
      
    )
 
}

export default App;

