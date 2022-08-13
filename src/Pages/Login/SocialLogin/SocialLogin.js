import React from 'react';
import google from '../../../images/icon/google.png';
import fb from '../../../images/icon/fb.png';
import github from '../../../images/icon/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {

        errorElement = <div className='text-danger'>
            <p>Error: {error?.message} {error1.message}</p>
        </div>

    }
    if (user || user1) {
        navigate('/home');

    }


    const hundleGoogleSign = () => {
        signInWithGoogle();

    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>

                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={hundleGoogleSign} className='btn btn-info w-50 d-block mx-auto my-5 '>
                    <img src={google} style={{ width: '30px' }} alt="" />
                    <span className='px-2'>Google Sign In</span>

                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-5'>
                    <img src={fb} style={{ width: '30px' }} alt="" />
                    <span className='px-2'>Sign in Facebook</span>

                </button>
                <button onClick={() => { signInWithGithub() }} className='btn btn-info w-50 d-block mx-auto '>
                    <img src={github} style={{ width: '50px' }} alt="" />
                    <span className='px-2'>Sign in Github</span>

                </button>
            </div>

        </div>
    );
};

export default SocialLogin;