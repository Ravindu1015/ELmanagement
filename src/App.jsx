// src/App.js
// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import ViewBooks from './components/ViewBooks';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/add">Add Book</Link>
        <Link to="/">View Books</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/" element={<ViewBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
