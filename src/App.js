import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ico from "./Images/Ico.jpg"


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
      <nav className="navbar navbar-expand-lg  navbar-dark justify-content-between">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={ico} width="50" height="50" alt=""></img>TecAir
          </a>

          <ul className="navbar-nav ml-auto d-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/iniciar_sesion">TEST</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ClientView">
                Cliente
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </nav>


  


      <div className="container">
        <Routes>
          <Route path="/ClientView" element={<Client_view />} />
          <Route path="/CineTec_Prototipo" element={<Client_view />} />
          <Route path="/MovieRegister" element={<Register_view />} />
          <Route path="/SucursalRegister" element={<Sucursal_view />} />
          <Route path="/SalaRegister" element={<Sala_view />} />
          <Route path="/ProyectionRegister" element={<Proyection_view />} />
          <Route path="/TecAir/Login_Admin" element={<Login_view />} />
          <Route path="/AdminView" element={<Admin_view />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
