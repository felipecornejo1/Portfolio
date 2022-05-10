import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './assets/css/style.css';
import { Home } from './sections/index';

// Roboto Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={< Home />} />
        </Routes>
    </div>
  );
}

export default App;
