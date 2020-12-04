import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";

function App ()  { 
  
    return (
      <Router>
        <div className ="App">
        <Navbar />
        <Route exact path= "/index" component = {HomePage} />
        <Route exact path= "/contact" component = {ContactPage} />
        <Route exact path= "/portfolio" component = {PortfolioPage} />
        <Route exact path= "/about" component = {HomePage} />
        </div>
      </Router>
    )
  }

export default App;
  
    
