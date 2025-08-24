import './App.css';
import React, { useState } from 'react';
import New from './components/New';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    // Force re-render by adding a small delay
    setProgress(10);
    setTimeout(() => setProgress(100), 500);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar 
          selectedCountry={selectedCountry} 
          onCountryChange={handleCountryChange} 
        />
        <LoadingBar
          color="#10b981"
          height={3}
          progress={progress}
        />
        <Routes>
          <Route  
            path='/' 
            element={
              <New 
                apiKey={apiKey}  
                setProgress={setProgress} 
                key={`general-${selectedCountry}`} 
                pagesize={pageSize} 
                category="general" 
                country={selectedCountry}
              />
            } 
          />
          <Route  
            path='/business' 
            element={
              <New 
                apiKey={apiKey}  
                setProgress={setProgress} 
                key={`business-${selectedCountry}`} 
                pagesize={pageSize} 
                category="business" 
                country={selectedCountry}
              />
            } 
          />
          <Route  
            path='/entertainment' 
            element={
              <New 
                apiKey={apiKey}  
                setProgress={setProgress} 
                key={`entertainment-${selectedCountry}`} 
                pagesize={pageSize} 
                category="entertainment" 
                country={selectedCountry}
              />
            } 
          />
          <Route  
            path='/health' 
            element={
              <New 
                apiKey={apiKey}  
                setProgress={setProgress} 
                key={`health-${selectedCountry}`} 
                pagesize={pageSize} 
                category="health" 
                country={selectedCountry}
              />
            } 
          />
          <Route  
            path='/science' 
            element={
              <New 
                apiKey={apiKey}  
                setProgress={setProgress} 
                key={`science-${selectedCountry}`} 
                pagesize={pageSize} 
                category="science" 
                country={selectedCountry}
              />
            } 
          />
          <Route  
            path='/sports' 
            element={
              <New 
                apiKey={apiKey}  
                setProgress={setProgress} 
                key={`sports-${selectedCountry}`} 
                pagesize={pageSize} 
                category="sports" 
                country={selectedCountry}
              />
            } 
          />
          <Route  
            path='/technology' 
            element={
              <New 
                apiKey={apiKey}  
                setProgress={setProgress} 
                key={`technology-${selectedCountry}`} 
                pagesize={pageSize} 
                category="technology" 
                country={selectedCountry}
              />
            } 
          />
          <Route  
            path='/crypto' 
            element={
              <New 
                apiKey={apiKey}  
                setProgress={setProgress} 
                key={`crypto-${selectedCountry}`} 
                pagesize={pageSize} 
                category="crypto" 
                country={selectedCountry}
              />
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;