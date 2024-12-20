import logo from './logo.svg';
import './App.css';
import Home from './`components/Home';
import { Outlet } from 'react-router-dom';
import Header from './`components/Header';
import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeChontext';


function App() {
  
  
  // console.log("setbgColor", bgColor);

  return (
    
    <ThemeProvider>
    {/* <Header setbgColor={[setbgColor]} bgColor={[bgColor]}/> */}
    <Header />

    <Outlet/>
     
    </ThemeProvider>
  );
}

export default App;
