import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ico from "../Images/Ico.png"

function Client_view() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const navigate = useNavigate();

  const [originOptions, setOriginOptions] = useState([]);
  const [DestOptions, setDestOptions] = useState([]);
  const [flightsData, setFlightsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);


  const [buttonColor, setButtonColor] = useState('btn-secondary');
  const [modalData, setModalData] = useState({
    username: '',
    password: '',
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cedula: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    email: '',
    phone: '',
  });





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
  };



  //modal payment
  const handlePayment = () => {
    //add the payment information here
    console.log("Payment Done");
    console.log(formData);
    window.alert("Pago Realizado");

    setShowModal(false);
  }
  //Input Handler for payment info
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  //Closing the modal
  const handleModalClose = () => {
    setShowModal(false);
  };
  //--------------------------------------------------------
  //Modal Login

  const handleLogin = () => {
    //Add Validation of user ID and pasword
    console.log("Sesión iniciada");
    setModalLogin(false);
  };

  //change route
  const handleCreateUser = () => {
    console.log("Checkin!");
    navigate('/Create_user');

  };

  async function handleAPI() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    console.log(data);
    window.alert(data);

  };

  //Close the login modal
  const handleModalLoginClose = () => {
    setModalLogin(false);
  };
  const handleCreateLogin = () => {
    setModalLogin(true);
  }

  // OBTENER DATOS DEL API AQUÍ
  const Data_for_reserve = () => {
    const origenes = ['Ciudad A', 'Ciudad B', 'Ciudad C', 'Ciudad D'];
    const destinos = ['Ciudad E', 'Ciudad F', 'Ciudad G', 'Ciudad H'];
    setOriginOptions(origenes);
    setDestOptions(destinos);
  };

  useEffect(() => {
    Data_for_reserve();
  }, []);

  //Búsqueda de vuelos, colocar aquí la llamada del api y modificar "flightsData"
  const searchFlights = () => {
    // Para pruebas, establece los datos de vuelo falsos aquí
    const testingflightdata = [
      {
        id: 1,
        origin: "Ciudad A",
        destination: "Ciudad E",
        departureDate: "2023-10-08",
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
      {
        id: 3,
        origin: "Ciudad b",
        destination: "Ciudad F",
        departureDate: "2023-10-20",
        departureTime: "10:00 AM",
        arrivalTime: "12:00 PM",
        price: "$1999",
      },
    ];
    setFlightsData(testingflightdata);

  };

  return (
    <div className='container'>
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark justify-content-between navbarr">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={ico} width="150" height="50" alt="" />
            </a>

            <ul className="navbar-nav ml-auto d-flex">
              <li className="nav-item">
                <Link className="nav-link" to="/Promotions">
                  Promotions
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link button_navbar" onClick={handleCreateLogin}>
                  Log In
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link button_navbar" onClick={handleAPI}>
                  Test API
                </button>
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

          <div className="form-group space">

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



          <button type="submit" className="btn btn-info">
            Search Flights
          </button>
        </form>
      </div>

      <div className="flights">
        <h1>Flights Information</h1>
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
                setShowModal(true);
                setSelectedFlight(flight);

              }}>Reservar Vuelo</button>
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
          <div className="modal-content align_center">
            <div className="modal-header">
              <h5 className="modal-title">Payment</h5>
            </div>

            <div className="modal-body">
              <h1>Detalles de Pago</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="first-name">Nombre:</label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Apellido:</label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cedula">Cédula:</label>
                  <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Número de Teléfono:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

              </form>
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
                onClick={handlePayment}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>





      {/* Login Modal  */}
      <div>
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: modalLogin ? 'block' : 'none' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={handleModalLoginClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleCreateUser}
                >
                  Create User
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>















    </div>
  );

}

export default Client_view;