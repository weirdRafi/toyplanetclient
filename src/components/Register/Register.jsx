import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { registerUser } = useContext(AuthContext)
    const [error, setError] = useState('')




    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.photoUrl.value;
        const password = form.password.value;

        console.log(name, email, url, password);

        if ((password.length < 6)) {
            setError('please provide atlease 6 Charecter password')

            return
        }
        else if(email, password){
            registerUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('')
                Swal.fire({
                    title: 'Success!',
                    text: 'Registered Successfully!!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            })
            .catch(err => {
                setError(err);
            })
        }
    }
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="max-w-md w-full mx-auto p-8 sm:p-10 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create an Account</h2>
                    <p className="py-3 text-red-600">{error}</p>
                    <form onSubmit={handleRegister}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                                placeholder="Enter your name"
                            />
                        </div>
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
                        <div className="mb-6">
                            <label htmlFor="photoUrl" className="block text-gray-700 text-sm font-medium mb-1">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photoUrl"
                                name="photoUrl"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                                placeholder="Enter the URL of your photo"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <input
                                type="submit"
                                value='Register'
                                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            />
                            <Link to='/login' className="text-purple-500 hover:text-purple-600 text-sm font-medium">
                                Already have an Account??
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;