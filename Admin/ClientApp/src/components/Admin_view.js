import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import ico from "../Images/Ico.png"
import { Link } from 'react-router-dom';


function Admin_view() {
  const [createPromotion, setcreatePromotion] = useState(false);
  const [FlightRegister, setFlightRegister] = useState(false);
  const [inputText, setInputText] = useState('');

  const navigate = useNavigate();

  const handleTextInputChange = (event) => {
    setInputText(event.target.value);
  };


  const [promotionData, setpromotionData] = useState({
    origin: "",
    destiny: "",
    price: "",
    duration: "",
    image: null,
  });

  const [flightData, setFlightData] = useState({
    Origin: "",
    Destinations: [
      {
        Destiny: "",
        Price: "",
        Duration: "",
      },
    ],
    Escalas: [],
  });
  


  //Modal Promotion 
  const handleModalClose = () => {
    setcreatePromotion(false);
    setFlightRegister(false);
  };

  const handleAddPromotion = () => {
    setcreatePromotion(true);
  }

  const handleSubmitPromotion = () => {
    setcreatePromotion(false);
    console.log(promotionData);
  }
  //-----------
  const handleCheckin = () => {
    navigate('/Checkin');
  }
  //Modal Flight Register
  const handleFlightRegister = () => {
    setFlightRegister(true)
  }

  const handleDestinationChange = (index, key, value) => {
    setFlightData((prevData) => {
      const updatedDestinations = [...prevData.Destinations];
      updatedDestinations[index] = {
        ...updatedDestinations[index],
        [key]: value,
      };
      return { ...prevData, Destinations: updatedDestinations };
    });
  };
  const handleEscalaChange = (index, value) => {
    setFlightData((prevData) => {
      const updatedEscalas = [...prevData.Escalas];
      updatedEscalas[index] = value;
      return { ...prevData, Escalas: updatedEscalas };
    });
  };
  
  const addEscala = () => {
    setFlightData((prevData) => ({
      ...prevData,
      Escalas: [...prevData.Escalas, ""],
    }));
  };
  
  
  

  const handleSubmitFlight = () => {
    console.log("Flight Data Submitted:", flightData);
  };




  //----------------
  const handleOpenFlight =()=>{
      console.log("ABRIR VUELO");
  }

  const handleCloseFlight =()=>{
      console.log("CERRAR VUELOO");
  }

  //------

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setpromotionData({
      ...promotionData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setpromotionData({
      ...promotionData,
      image: imageFile,
    });
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
                <Link className="nav-link" to="/Client_view">
                  TecAir
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='Admin'>
        <h1>Administration View</h1>
        <button type="addPromotion" className="btn btn-info btns space" onClick={() => handleAddPromotion()}>Add Promotion</button>
        <h1></h1>
        <button type="Checkin" className="btn btn-info btns space" onClick={() => handleCheckin()}>Check in</button>
        <h1></h1>
        <button type="FlightRegister" className="btn btn-info btns space" onClick={() => handleFlightRegister()}>Flight Register</button>
        <h1></h1>
        <div>
       
        <input
          type="text"
          value={inputText}
          onChange={handleTextInputChange}
          placeholder="Enter Flight ID"
        />
      </div>

      <div>
        
        <button className='btn btn-info btns space' onClick={handleOpenFlight}>Open</button>

        
        <button className='btn btn-info btns space'  onClick={handleCloseFlight}>Close</button>
      </div>


      </div>


      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: createPromotion ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content align_center">
            <div className="modal-header">
              <h5 className="modal-title">Add Promotion</h5>
            </div>

            <div className="modal-body">
              <h1>Promotion Details</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="origin">Origin:</label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={promotionData.origin}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="destiny">Destiny:</label>
                  <input
                    type="text"
                    id="destiny"
                    name="destiny"
                    value={promotionData.destiny}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={promotionData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Duration:</label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={promotionData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image:</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageUpload}
                    accept="image/*"
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
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmitPromotion}
              >
                Add Promotion
              </button>
            </div>
          </div>
        </div>
      </div>




      {/* FLIGHT REGISTER */}
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: FlightRegister ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content align_center">
            <div className="modal-header">
              <h5 className="modal-title">Flight Registration</h5>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="origin">Origin:</label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={flightData.Origin}
                    onChange={(e) => setFlightData({ ...flightData, Origin: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="destiny">Destiny:</label>
                  <input
                    type="text"
                    id="destiny"
                    name="destiny"
                    value={flightData.Destinations[0].Destiny}
                    onChange={(e) => handleDestinationChange(0, "Destiny", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="escalas">Escalas:</label>
                  {flightData.Escalas.map((escala, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={escala}
                        onChange={(e) => handleEscalaChange(index, e.target.value)}
                        required
                      />
                    </div>
                  ))}
                  <button onClick={addEscala}>Agregar Escala</button>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={flightData.Destinations[0].Price}
                    onChange={(e) => handleDestinationChange(0, "Price", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Duration:</label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={flightData.Destinations[0].Duration}
                    onChange={(e) => handleDestinationChange(0, "Duration", e.target.value)}
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
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleModalClose();
                  handleSubmitFlight();
                }}
              >
                Add Flight
              </button>
            </div>
          </div>
        </div>
      </div>












    </div>
  );
}

export default Admin_view;