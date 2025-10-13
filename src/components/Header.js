import React, { useState, useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/store/userSlice';
import { NETFLIX_TEXT, NETFLIX_LOGIN_LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/store/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/store/configSlice';

const Header = () => {
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

    useEffect(() => {

        // OnAuthStateChanged is a listener that gets triggered whenever the user signs in or signs out
        // It also gets triggered once when the listener is attached
        // We are defining it inside useEffect because we want it to be attached only once when the component mounts
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse');
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');
            }
        });

        // Unsubscribe when the component unmounts
        return () => {
            unsubscribe();
        }
    }, []);

    // GetData from useSelector to check if user is logged in
    const user = useSelector((state) => state.user);
    const isUserLoggedIn = user !== null;

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleGPTSearch = () => {
        //Toggle my GPT search button.
        dispatch(toggleGptSearchView());
        setShowDropdown(false);
    };

    const handleAccount = () => {
        console.log("Account clicked");
        setShowDropdown(false);
    };

    const handleSignOut = () => {
        console.log("Sign Out clicked");
        setShowDropdown(false);
        // Add your sign out logic here
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
        console.log("Language changed to:", e.target.value);
    };

    return (
        <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 width-screen flex w-full justify-between'>
            <img className='w-44' src={NETFLIX_TEXT} alt="Netflix Logo" />

            {isUserLoggedIn && <div className='flex items-center p-2 relative'>
                {/* Language Selector */}
                {showGptSearch && <select
                    onChange={handleLanguageChange}
                    className='mr-4 px-3 py-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer hover:bg-gray-700 transition-colors duration-200'
                >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.code} value={lang.code}>{lang.label}</option>
                    ))}
                </select>}

                <img
                    className='w-8 h-8 rounded'
                    src={NETFLIX_LOGIN_LOGO}
                    alt="userIcon"
                />

                {/* Dropdown Arrow */}
                <button
                    onClick={toggleDropdown}
                    className='ml-1 text-white hover:text-gray-300 transition-colors duration-200'
                >
                    <svg
                        className={`w-4 h-4 transform transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                    <div className='absolute top-12 right-0 bg-black bg-opacity-90 text-white rounded-md shadow-lg py-2 w-48 z-50'>
                        <button
                            onClick={handleGPTSearch}
                            className='block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors duration-200'
                        >
                            GPT search
                        </button>
                        <button
                            onClick={handleAccount}
                            className='block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors duration-200'
                        >
                            Account
                        </button>
                        <hr className='border-gray-600 my-1' />
                        <button
                            onClick={handleSignOut}
                            className='block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors duration-200'
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>}
        </div>
    )
}

export default Header