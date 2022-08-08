import React from 'react';
import './Services.css';

const Service = ({ service }) => {

    const { name, description, price, img } = service;
    return (

        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button>book:{name}</button>

        </div>
    );

};

export default Service;