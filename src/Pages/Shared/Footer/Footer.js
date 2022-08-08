import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();


    return (
        <div>
            <footer>
                <h1 className='text-center'><small>year @ {year} year</small></h1>
            </footer>

        </div>
    );
};

export default Footer;