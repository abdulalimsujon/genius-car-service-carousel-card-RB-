import React from 'react';
import Banner from '../Banner/Banner';
import Experts from './Service/Expert/Experts/Experts';
import ServicEs from './servicEs/ServicEs';



const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ServicEs></ServicEs>
            <Experts></Experts>
        </>
    );
};

export default Home;