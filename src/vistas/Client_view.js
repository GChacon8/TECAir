import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ico from "../Images/Ico.jpg"

function Client_view() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState(''); // Nuevo campo de fecha de regreso

  const [originOptions, setOriginOptions] = useState([]);
  const [DestOptions, setDestOptions] = useState([]);

  // Función para manejar el envío del formulario, LLAMAR AL API AQUÍ PARA ENVIAR DATOS
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Origen:', origin);
    console.log('Destino:', destination);
    console.log('Fecha de Salida:', departureDate);
    console.log('Fecha de Regreso:', returnDate); // Nuevo campo de fecha de regreso
  };

  // OBTENER DATOS DEL API AQUÍ
  const Data_for_reserve = () => {
    const origenes = ['Ciudad A', 'Ciudad B', 'Ciudad C', 'Ciudad D'];
    const destinos = ['Ciudad E', 'Ciudad E', 'Ciudad F', 'Ciudad G'];
    setOriginOptions(origenes);
    setDestOptions(destinos);
  };

  useEffect(() => {
    Data_for_reserve();
  }, []);

  return (
    <div className='container'>
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark justify-content-between navbarr">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={ico} width="50" height="50" alt="" />
              TecAir
            </a>

            <ul className="navbar-nav ml-auto d-flex">
              <li className="nav-item">
                <Link className="nav-link" to="/iniciar_sesion">
                  TEST
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ClientView">
                  Cliente
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/TecAir/Login_Admin">
                  Iniciar Sesión!
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='reserve'>
        <h1>Selección de Vuelo</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group espace">
            <label htmlFor="origin">Origen:</label>
            <select
              className="form-control"
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option value="">Origen</option>
              {originOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group espace">
            <label htmlFor="destination">Destino:</label>
            <select
              className="form-control"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Destino</option>
              {DestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group espace">
            <label htmlFor="departureDate">Fecha de Salida:</label>
            <input
              type="date"
              className="form-control"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div className="form-group espace">
            <label htmlFor="returnDate">Fecha de Regreso:</label>
            <input
              type="date"
              className="form-control"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reservar Vuelo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Client_view;
