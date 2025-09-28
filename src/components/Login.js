import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignInForm = () => { setIsSignIn(!isSignIn); }
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useRef hook.
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value, name?.current?.value, isSignIn);
        setErrorMessage(message);
        if (message) return;
        // Once form is valid then I can proceed with Sign in

        if (!isSignIn) {
            // Sign up the user
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        // Profile updated!
                        // ...
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                        navigate('/browse');
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(error);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        } else {
            // Sign in the user
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_small.jpg" alt="Netflix background" />
            </div>
            <form onSubmit={(e) => { e.preventDefault(); }} className='absolute w-3/12 bg-black bg-opacity-75 my-36 mx-auto p-10 right-0 left-0 text-white rounded-lg'>
                <h5 className='text-white text-3xl font-bold pt-6 py-4 pb-2'>{isSignIn ? 'Sign In' : 'Sign Up'}</h5>
                {!isSignIn && <input ref={name} type="text" name="name" placeholder='Full Name' className='p-4 m-2 w-full bg-gray-700 text-white rounded-sm' />}

                <input ref={email} type="email" name="email" placeholder='Email' className='p-4 m-2 w-full bg-gray-700 text-white rounded-sm' />
                <input ref={password} type="password" name="password" placeholder='Password' className='p-4 m-2 w-full bg-gray-700 text-white rounded-sm' />
                <p className='text-red-600 font-bold p-4 text-lg'>{errorMessage}</p>
                <button type="submit" className='p-4 m-2 w-full bg-red-700 text-white rounded-sm hover:bg-red-800' onClick={handleButtonClick}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? 'New to Netflix? Sign up now.' : 'Already have an account? Sign In'}</p>
            </form>
        </div>
    )
}

export default Login