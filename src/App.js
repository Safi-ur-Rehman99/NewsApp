import './App.css';

import React, { useState } from 'react';
import New from './components/New';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
   const pageSize=5;
   const apiKey=process.env.REACT_APP_NEWS_API_KEY

     const [progress, setProgress] = useState(0);
   
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
              <LoadingBar
        color="#199bf1ff"
        height={3}
        progress={progress}
     
      />
          <Routes>
            <Route  path='/' element={<New apiKey={apiKey}  setProgress={setProgress} key="general" pagesize={pageSize} category="general" />} />
            <Route  path='/business' element={<New apiKey={apiKey}  setProgress={setProgress} key="business" pagesize={pageSize} category="business" />} />
            <Route  path='/entertainment' element={<New apiKey={apiKey}  setProgress={setProgress} key="entertainment" pagesize={pageSize} category="entertainment" />} />
            <Route  path='/health' element={<New apiKey={apiKey}  setProgress={setProgress} key="health" pagesize={pageSize} category="health" />} />
            <Route  path='/science' element={<New apiKey={apiKey}  setProgress={setProgress} key="science" pagesize={pageSize} category="science" />} />
            <Route  path='/sports' element={<New apiKey={apiKey}  setProgress={setProgress} key="sports" pagesize={pageSize} category="sports" />} />
            <Route  path='/technology' element={<New apiKey={apiKey}  setProgress={setProgress} key="technology" pagesize={pageSize} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  

}

export default App;