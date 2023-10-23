import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ico from "../Images/Ico.png"

function Promotion_view() {
    const [promotions, setPromotions] = useState([]);

    // Supongamos que tienes un arreglo de promociones con la estructura que mencionaste
    const initialPromotions = [
        {
            id: 1,
            origin: 'Origin 1',
            destiny: 'Destiny 1',
            price: '$100',
            duration: '2 hours',
            image: 'image1.jpg',
        },
        {
            id: 2,
            origin: 'Origin 2',
            destiny: 'Destiny 2',
            price: '$150',
            duration: '3 hours',
            image: 'image2.jpg',
        },
        ,
        {
            id: 3,
            origin: 'Origin 2',
            destiny: 'Destiny 2',
            price: '$200',
            duration: '3 hours',
            image: 'image2.jpg',
        },
        ,
        {
            id: 4,
            origin: 'Origin 2',
            destiny: 'Destiny 2',
            price: '$150',
            duration: '3 hours',
            image: 'image2.jpg',
        },
        // Agrega más promociones según sea necesario
    ];

    useEffect(() => {
        //LLamada al api para traer las promociones
        setPromotions(initialPromotions);
    }, []);

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg  navbar-dark justify-content-between navbarr">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={ico} width="150" height="50" alt="" />
                        </a>

                        <ul className="navbar-nav ml-auto d-flex">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Reservation
                                </Link>
                            </li>                            
                        </ul>
                    </div>
                </nav>
            </div>

            <div className='promotion-container'>
                <h1>Promotions</h1>
                <div className="promotions-list">
                    {promotions.map((promotion) => (
                        <div key={promotion.id} className="promotion-card">
                            <h3>Origin: {promotion.origin}</h3>
                            <h3>Destiny: {promotion.destiny}</h3>
                            <p>Price: {promotion.price}</p>
                            <p>Duration: {promotion.duration}</p>
                            <img src={promotion.image} alt={`Promotion ${promotion.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Promotion_view;
