import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesign from './components/Addesign';
import { Props } from './components/Header';
import Votes from './components/votes';


function App({ flavor, fontSize, darkTheme}: Props) {
  return (
    <div className="App">
    <Header/>
    <div className='container'>
    <AdDesign/>
    <Votes/>
    </div>
    </div>
  );
}

export default App;
