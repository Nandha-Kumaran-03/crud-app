import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Users from './Users';
import CreateUser from './Createuser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Route for displaying the Users component */}
          <Route path="/" element={<Users />} />
          
          {/* Route for CreateUser */}
          <Route path="/create" element={<CreateUser />} />
          
          {/* Route for UpdateUser */}
          <Route path="/update" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
