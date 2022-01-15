import React, { Component } from 'react';
import architectura from './architectura.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <header className="App-header">
            <h3>Architektura systemu</h3>
            <img src={architectura} alt="logo" />

            <p>Projekt powstaly poprzez przeprowadzenie modyfikacji aplikacji z lab9<br/><br/>
            Stworzono strone glowna (Main.js), strony historii (History.js) i dokumentacji (Documentation.js).</p><br/>
            <p>Wprowadzono limit indeksu k nie wiekszy niz 20 <br/><br/>
            Dodano mozliwosc przegladania historii, wyświetlana jest historia 10 ostatnich 	          obliczeń. W pliku Fib.js dodano metode fetchIntoSessionStorage() pozwalajaca na
            zapis danych w danej sesji. Zas odczyt tych danych w History.js jest realizowanie 
            przez metode getValues().<br/></p><br/>
       

            <Link to="/">Strona główna</Link>
            <Link to="/fibcal">Fib Calc</Link>
            </header>
        </div>
    );
  };
  
	   
