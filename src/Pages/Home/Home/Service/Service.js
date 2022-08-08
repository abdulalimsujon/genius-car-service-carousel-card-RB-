import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Service = ({ service }) => {

    const { id, name, description, price, img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);

    }
    return (

        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>book:{name}</button>

        </div>
    );

};

export default Service;