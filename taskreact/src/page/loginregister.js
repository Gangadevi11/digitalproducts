import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/inventorylogin">Login</Link></li>
            <li><Link to="/inventoryregister">Register</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/inventorylogin" element={<Login />} />
          <Route path="/inventoryregister" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
