import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Pages/Home';
import About from './Pages/About';
import LogIn from './Auth/LogIn';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import SignUp from './Auth/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/auth/login' element={<LogIn/>} />
        <Route path='/auth/signup' element={<SignUp/>} />
      </Route>
    </Routes>
  );
}

export default App;
