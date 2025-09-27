import { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignInForm = () => { setIsSignIn(!isSignIn); }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_small.jpg" alt="Netflix background" />
            </div>
            <form className='absolute w-3/12 bg-black bg-opacity-75 my-36 mx-auto p-10 right-0 left-0 text-white rounded-lg'>
                <h5 className='text-white text-3xl font-bold pt-6 py-4 pb-2'>{isSignIn ? 'Sign In' : 'Sign Up'}</h5>
                {!isSignIn && <input type="text" name="name" value="" placeholder='Full Name' className='p-4 m-2 w-full bg-gray-700 text-white rounded-sm' />}
                <input type="email" name="email" value="" placeholder='Email' className='p-4 m-2 w-full bg-gray-700 text-white rounded-sm' />
                <input type="password" name="password" value="" placeholder='Password' className='p-4 m-2 w-full bg-gray-700 text-white rounded-sm' />
                <button type="submit" className='p-4 m-2 w-full bg-red-700 text-white rounded-sm hover:bg-red-800'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? 'New to Netflix? Sign up now.' : 'Already have an account? Sign In'}</p>
            </form>
        </div>
    )
}

export default Login