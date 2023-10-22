import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Styles.css'; 

function Create_user() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Verificación del usuario y contraseña del admin
  const handleSubmit = () => {
    if (username === 'admin' && password === 'admin') {
      console.log('VISTA DE CREACIÓN DE USUARIO');
      navigate('/Client_view');
    } else {
      console.log('Credenciales incorrectas');
      //navigate('/ClientView');
    }
  };
  
  const handleCancel = ()=>{
    navigate("/");
  }

  return (

    <div className="login">
      <h1>Creación de Usuario</h1>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div className='btn-group'>
        <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Sign In</button>


      </div>

    </div>
  );
}

export default Create_user;
