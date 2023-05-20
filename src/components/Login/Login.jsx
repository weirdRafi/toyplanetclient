import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const { loginUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const location = useLocation()
    const navigate = useNavigate();
    const auth = getAuth(app);
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Loged In!!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })
            .catch(error => {
                setError(error);
            })
    }



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        if ((password.length < 6)) {
            setError('please provide atlease 6 Charecter password')

            return
        }
        else if (email, password) {

            loginUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Loged In!!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    navigate(from, { replace: true })
                    setError('')
                    form.reset()
                    
                })
                .catch(error => {
                    setError(error.message)
                })
        }
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full mx-auto p-8 sm:p-10 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Log In</h2>
                <p className="py-3 text-red-600">{error}</p>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <input
                            type="submit"
                            value='Log In'
                            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        />


                        <Link to='/register' className="text-purple-500 hover:text-purple-600 text-sm font-medium">
                            Dont have an Account??
                        </Link>
                    </div>
                </form>
                <div className='text-center mt-5'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline text-purple-700"> <FontAwesomeIcon icon={faGoogle} style={{ fontSize: 30}} className="text-center text-purple-500" /> &nbsp;  Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;


