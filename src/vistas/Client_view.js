import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ico from "../Images/Ico.jpg"

function Client_view() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [originOptions, setOriginOptions] = useState([]);
  const [DestOptions, setDestOptions] = useState([]);

  const [flightsData, setFlightsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  

  

  /*
  const flightsData = [
    {
      id: 1,
      origin: "Ciudad A",
      destination: "Ciudad E",
      departureDate: "2023-10-20",
      departureTime: "10:00 AM",
      arrivalTime: "12:00 PM",
      price: "$200",
    },
    {
      id: 2,
      origin: "OMG",
      destination: "CARTAGO",
      departureDate: "2023-10-20",
      departureTime: "10:00 AM",
      arrivalTime: "12:00 PM",
      price: "$600",
    },
    {
      id: 3,
      origin: "",
      destination: "",
      departureDate: "",
      departureTime: "",
      arrivalTime: "",
      price: "",
    },
    //  add vuelos, llamar api
  ];
  */

  // Función para manejar el envío del formulario, LLAMAR AL API AQUÍ PARA ENVIAR DATOS
  const handleSubmit = (e) => {
    e.preventDefault();
    searchFlights();
    console.log('Origen:', origin);
    console.log('Destino:', destination);
    console.log('Fecha de Salida:', departureDate);
    console.log('Fecha de Regreso:', returnDate); // Nuevo campo de fecha de regreso
  };

  //Botón de realizar reservación
  const handleReserveFlight = (flight) => {
    // Aquí se accesan a los datos de flight
    console.log('Reservando vuelo:', flight);
    setShowModal(true); // Abre el modal
    console.log(showModal);
  };

  //Para elegir asientos y cerrar la reservación del vuelo
  const handleConfirmReservation = () => {
   // console.log('VUELO RESERVADO DESDE EL MODAL:', flight);
   console.log("confirmar reservacion desde el modal!!!!!!!!!!!!!!");
    setShowModal(false); // Cierra el modal después de la reserva
  };

  //Closing the modal
  const handleModalClose = () => {
    setShowModal(false);
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

  //Búsqueda de vuelos, colocar aquí la llamada del api y modificar "flightsData"
  const searchFlights = () => {
    
    // Aquí LA LLAMADA AL API probar función fetch de react
    /*
    fetch('URL_DE_TU_API')
      .then((response) => response.json())
      .then((data) => {
        setFlightsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al buscar vuelos:', error);
        setIsLoading(false);
      });
    */
  
    // Para pruebas, establece los datos de vuelo falsos aquí
    const testingflightdata = [
      {
        id: 1,
        origin: "Ciudad A",
        destination: "Ciudad E",
        departureDate: "2023-10-20",
        departureTime: "10:00 AM",
        arrivalTime: "12:00 PM",
        price: "$200",
      },
      {
        id: 2,
        origin: "Ciudad b",
        destination: "Ciudad F",
        departureDate: "2023-10-20",
        departureTime: "10:00 AM",
        arrivalTime: "12:00 PM",
        price: "$900",
      },
      // Puedes agregar más datos de vuelos aquí para pruebas
    ];
  
    // Establece los datos de vuelo y detén la carga simulada
    setFlightsData(testingflightdata);
    
  };

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

      <div className='search'>
        <h1>Search</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group espace">
          
            <select
              className="form-control"
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            >
              <option value="">Origin</option>
              {originOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group espace">
           
            <select
              className="form-control"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Destiny</option>
              {DestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group espace">
            <label htmlFor="departureDate">Departure Date:</label>
            <input
              type="date"
              className="form-control"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          <div className="form-group espace">
            <label htmlFor="returnDate">Arrival Date:</label>
            <input
              type="date"
              className="form-control"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-info">
            Search Flights
          </button>
        </form>
      </div>

      <div className="flights">
        <h1>Información de Vuelos</h1>
        {flightsData.map((flight) => (
          <div key={flight.id} className="flight-card">
            <h2>
              Vuelo de {flight.origin} a {flight.destination}
            </h2>
            <p>Fecha de Salida: {flight.departureDate}</p>
            <p>Hora de Salida: {flight.departureTime}</p>
            <p>Hora de Llegada: {flight.arrivalTime}</p>
            <p>Precio: {flight.price}</p>
            <button
              className="button btn btn-info float-left"
              onClick={() => {
                setSelectedFlight(flight);
                setShowModal(true);
              }}
            >
              Reservar Vuelo
            </button>
          </div>
        ))}
      </div>

      {/* Modal Bootstrap */}
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmar reserva</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleModalClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedFlight && (
                <div>
                  <p>Vuelo de {selectedFlight.origin} a {selectedFlight.destination}</p>
                  <p>Fecha de Salida: {selectedFlight.departureDate}</p>
                  <p>Hora de Salida: {selectedFlight.departureTime}</p>
                  <p>Hora de Llegada: {selectedFlight.arrivalTime}</p>
                  <p>Precio: {selectedFlight.price}</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleModalClose}
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirmReservation}
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client_view;