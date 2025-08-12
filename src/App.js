import './App.css';

import React, { Component } from 'react';
import New from './components/New';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
   pageSize=5;
  render() {
   
    return (
      <div>
        <BrowserRouter>
  
          <Routes>
            <Route  path='/' element={<New key="general" pagesize={this.pageSize} category="general" />} />
            <Route  path='/business' element={<New key="business" pagesize={this.pageSize} category="business" />} />
            <Route  path='/entertainment' element={<New key="entertainment" pagesize={this.pageSize} category="entertainment" />} />
            <Route  path='/health' element={<New key="health" pagesize={this.pageSize} category="health" />} />
            <Route  path='/science' element={<New key="science" pagesize={this.pageSize} category="science" />} />
            <Route  path='/sports' element={<New key="sports" pagesize={this.pageSize} category="sports" />} />
            <Route  path='/technology' element={<New key="technology" pagesize={this.pageSize} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}