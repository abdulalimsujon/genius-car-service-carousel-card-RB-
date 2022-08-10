import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    return (
        <div>
            <h1>service id is :{serviceId}</h1>

            <div className='text-center'>

                <Link to='/checkout'>
                    <button className='btn btn-primary text-center'>procced checkout</button>

                </Link>

            </div>


        </div>
    );
};

export default ServiceDetail;