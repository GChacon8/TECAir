import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import './Css/Main.css';  
import './Css/Styles.css';

import Login_view from './vistas/Login';
import Admin_view from './vistas/Admin_view';
import Client_view from './vistas/Client_view';
import Register_view from './vistas/MovieRegister';
import Sucursal_view from './vistas/SucursalRegister';
import Sala_view from './vistas/SalaRegister';
import Proyection_view from './vistas/ProyectionRegister';


function App() {
  return (
    <Router>
      


  


      <div className="container">
        <Routes>
          <Route path="/TecAir/Login_Admin" element={<Login_view />} /> 
          
          <Route path="/2" element={<Client_view />} />
          <Route path="/3" element={<Register_view />} />
          <Route path="/4" element={<Sucursal_view />} />
          <Route path="/5" element={<Sala_view />} />
          <Route path="/6" element={<Proyection_view />} />
          <Route path="/7" element={<Admin_view />} />


          <Route path="/CineTec_Prototipo" element={<Client_view />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
