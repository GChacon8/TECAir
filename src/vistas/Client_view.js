import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Client_view() {
  const navigate = useNavigate();

  //por si quiero llamar a alguna función desde un button
  const handleButtonClick = () => {
    console.log('SOY UN BOTÓN');
  };


  //en los select de las lineas 29 par abajo se debe de accesar a la DB y modificar las opciones!!!
  return (

    <div
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
      }}>
     
     <h1>test</h1>
    </div>
    
  );
}

export default Client_view;