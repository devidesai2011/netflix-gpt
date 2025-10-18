import { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/store/userSlice';
import { NETFLIX_SIGNIN_PAGE_IMAGE_URL } from '../utils/constants';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignInForm = () => { setIsSignIn(!isSignIn); }
    const [errorMessage, setErrorMessage] = useState(null);
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
                    // const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };
    return (
        <div className="min-h-screen relative">
            <Header />
            <div className="absolute inset-0">
                <img
                    src={NETFLIX_SIGNIN_PAGE_IMAGE_URL}
                    alt="Netflix background"
                    className="w-full h-full object-cover"
                />
            </div>
            <form
                onSubmit={(e) => { e.preventDefault(); }}
                className='absolute w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 bg-black bg-opacity-75 top-20 sm:top-24 md:top-32 lg:top-36 mx-auto p-6 sm:p-8 md:p-10 right-0 left-0 text-white rounded-lg'
            >
                <h5 className='text-white text-2xl sm:text-3xl font-bold pt-4 sm:pt-6 py-2 sm:py-4 pb-2'>{isSignIn ? 'Sign In' : 'Sign Up'}</h5>
                {!isSignIn && <input ref={name} type="text" name="name" placeholder='Full Name' className='p-3 sm:p-4 m-2 w-full bg-gray-700 text-white rounded-sm text-sm sm:text-base' />}

                <input ref={email} type="email" name="email" placeholder='Email' className='p-3 sm:p-4 m-2 w-full bg-gray-700 text-white rounded-sm text-sm sm:text-base' />
                <input ref={password} type="password" name="password" placeholder='Password' className='p-3 sm:p-4 m-2 w-full bg-gray-700 text-white rounded-sm text-sm sm:text-base' />
                <p className='text-red-600 font-bold p-2 sm:p-4 text-sm sm:text-lg'>{errorMessage}</p>
                <button type="submit" className='p-3 sm:p-4 m-2 w-full bg-red-700 text-white rounded-sm hover:bg-red-800 text-sm sm:text-base' onClick={handleButtonClick}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-3 sm:py-4 cursor-pointer text-sm sm:text-base' onClick={toggleSignInForm}>{isSignIn ? 'New to Netflix? Sign up now.' : 'Already have an account? Sign In'}</p>
            </form>
        </div>
    )
}

export default Login