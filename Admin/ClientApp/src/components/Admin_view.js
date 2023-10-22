import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import ico from "../Images/Ico.png"
import { Link } from 'react-router-dom';


function Admin_view() {
  const [createPromotion, setcreatePromotion] = useState(false);
  const [Checkin, setcheckin] = useState(false);
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    origin: "",
    destiny: "",
    price: "",
    duration: "",
    image: null, // Usarás este campo para la imagen
  });


  //por si quiero llamar a alguna función desde un button
  const handleButtonClick = () => {
    console.log('SOY UN BOTÓN');

  };

  const handleModalClose = () => {
    setcreatePromotion(false);
  };

  const handleAddPromotion = () => {
    setcreatePromotion(true);
    console.log("omggg");
  }

  const handleCheckin = () => {
    setcheckin(true);
    console.log("Checkin!");

    navigate('/Checkin');
  }
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setFormData({
      ...formData,
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
                      value={formData.origin}
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
                      value={formData.destiny}
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
                      value={formData.price}
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
                      value={formData.duration}
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
                  onClick={handleAddPromotion}
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