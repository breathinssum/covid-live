import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Summary from './Components/Summary';
import "./index.css"
import Korea from './Pages/Korea';

function App() {


  return (
    <div className="App">
      <Sidebar/>
      <section>
        <Routes>
        <Route path = "/" element={<Korea/>}/>
        <Route path = "/world" element={<div>world</div>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
