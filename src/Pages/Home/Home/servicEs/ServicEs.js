import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './servicEs.css';

const ServicEs = () => {

    const [services, SetServices] = useState([]);

    useEffect(() => {

        fetch('services.json')
            .then(res => res.json())
            .then(data => SetServices(data));

    })


    return (
        <div id='services'>
            <h1 className='services-title mt-5'>Our services </h1>
            <div className='services-container'>
                {
                    services.map(service => <Service

                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default ServicEs;