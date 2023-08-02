import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './components/Index';
import Create from './components/create';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <br></br>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
