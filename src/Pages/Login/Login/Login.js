
import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {

        errorElement = <div className='text-danger'>
            <p>Error: {error?.message}</p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const hundleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email');

        } else {
            toast('Please enter your email address');
        }


    }
    const navigateRegistor = () => {
        navigate('/register');

    }
    return (
        <div className='container mt-auto w-50 '>
            <h2 className='text-center text-primary '>please login</h2>
            <Form onSubmit={hundleSubmit} className='mt-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" reqired />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p >New to genius car? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegistor} >Please Register</Link></p>
            <p >Forget password? <button className='btn text-primary pe-auto text-decoration-none' onClick={resetPassword} >Reset Password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>

    );
};

export default Login;