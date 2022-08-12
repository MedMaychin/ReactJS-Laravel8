import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Student from './pages/Student';
import Addstudent from './pages/Addstudent';


function App() {
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Student/>}/>
          <Route exact path="/add-student" element={<Addstudent/>}/>
        </Routes>
      </Router>
  );
}

export default App;
