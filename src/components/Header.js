import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/store/userSlice';
import { useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    // GetData from useSelector to check if user is logged in
    const user = useSelector((state) => state.user);
    const isUserLoggedIn = user !== null;

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleManageProfile = () => {
        console.log("Manage Profile clicked");
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
            navigate('/');
            dispatch(removeUser());
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    };

    return (
        <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 width-screen flex w-full justify-between'>
            <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />

            {isUserLoggedIn && <div className='flex items-center p-2 relative'>
                <img
                    className='w-8 h-8 rounded'
                    src="https://occ-0-4951-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
                            onClick={handleManageProfile}
                            className='block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors duration-200'
                        >
                            Manage Profile
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