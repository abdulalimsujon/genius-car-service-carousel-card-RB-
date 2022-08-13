import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';

import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

    const [agree, SetAgree] = useState(false);



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const hundleRegister = async (event) => {
        event.preventDefault();


        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');






        //console.log(email, password);



    }
    return (
        <div className='Register-form'>

            <form onSubmit={hundleRegister}>
                <h2 className='text-center text-primary mb-5'>please register</h2>

                <input type="text" name="Name" id="" placeholder='Your name' />


                <input type="email" name="email" id="" placeholder='your email' required />

                <input type="password" name="password" id="" placeholder='your password' required />
                <input onClick={() => SetAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor='terms'>Accept turns and condition</label>

                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary'
                    type="submit" value="Register" />
                <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none w-50 mx-auto' onClick={navigateRegister}> Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Register;