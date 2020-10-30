import React, {Suspense} from 'react';
import Linguistic from './container/Linguistics/Linguistics';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import './i18n';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Suspense fallback={(<div>Loading!!</div>)}>
    <Linguistic />
    </Suspense>
    </div>
    </BrowserRouter>
  );
}

export default App;
