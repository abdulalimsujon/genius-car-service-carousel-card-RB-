import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const nevigate = useNavigate();

    const navigateRegister = () => {
        nevigate('/login')
    }
    const hundleRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password;
    }




    return (
        <div className='Register-form'>

            <form onSubmit={hundleRegister}>
                <h2 className='text-center text-primary mb-5'>please register</h2>

                <input type="text" name="Name" id="" placeholder='Your name' />


                <input type="email" name="email" id="" placeholder='your email' required />

                <input type="password" name="password" id="" placeholder='your password' required />

                <input type="submit" value="Register" />
                <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Login</Link></p>

            </form>

        </div>
    );
};

export default Register;