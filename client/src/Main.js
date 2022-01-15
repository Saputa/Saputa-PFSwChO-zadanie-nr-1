import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
                            Realizacja zadania nr1 w ramach laboratorium PFSwCO
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
            >

            </a>
            <Link to="/fibcal">Fib Calc</Link>
            <Link to="/docs">Dokumentacja</Link>
            <p>Mateusz Saputa</p> 
            
       
            </header>
        </div>
    );
  };
