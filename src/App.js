import React from 'react';
import Linguistic from './container/Linguistics/Linguistics';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Linguistic/>
    </div>
    </BrowserRouter>
  );
}

export default App;
