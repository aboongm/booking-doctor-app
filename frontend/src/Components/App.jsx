import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Layout/Nav/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import LogIn from './Auth/LogIn';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
