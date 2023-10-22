import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import ico from "../Images/Ico.png"
import { Link } from 'react-router-dom';


function Admin_view() {
  const [createPromotion, setcreatePromotion] = useState(false);
  const [FlightRegister, setFlightRegister] = useState(false);
  
  const navigate = useNavigate();

  const [promotionData, setpromotionData] = useState({
    origin: "",
    destiny: "",
    price: "",
    duration: "",
    image: null, // Usarás este campo para la imagen
  });


  
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

  const handleCheckin = () => {
    navigate('/Checkin');
  }

  const handleFlightRegister=()=>{
    setFlightRegister(true)
  }
  

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
        <button type="addPromotion" className="btn btn-info space" onClick={() => handleAddPromotion()}>Add Promotion</button>
        <h1></h1>  
        <button type="Checkin" className="btn btn-info space" onClick={() => handleCheckin()}>Check in</button>
        <h1></h1>
        <button type="FlightRegister" className="btn btn-info space" onClick={() => handleFlightRegister()}>Flight Register</button>
      
      
      </div>


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











    </div>
  );
}

export default Admin_view;
