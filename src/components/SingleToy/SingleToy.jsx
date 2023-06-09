import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleToy = () => {
    const singleToy = useLoaderData()
    useTitle('Detail')
    const { url, name, sellerName, sellerEmail, subcategory, price, rating, quantity, description } = singleToy
    console.log(singleToy);
    return (
        <div className="max-w-md mx-auto mt-5 mb-5 bg-white shadow-md rounded-lg overflow-hidden">
            <img
                className="object-cover w-full h-48"
                src={url}
                alt="Toy"
            />

            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800"> {name}</h3>
                <p className="text-gray-600"><strong>Seller:</strong> {sellerName}</p>
                <p className="text-gray-600"><strong>Seller Email:</strong> {sellerEmail}</p>
                <p className="text-gray-600"><strong>Price:</strong> ${price}</p>
                <p className="text-gray-600"><strong>Rating:</strong> {rating}</p>
                <p className="text-gray-600"><strong>Available Quantity:</strong> {quantity}</p>
                <p className="text-gray-600"><strong>Detail Description:</strong> </p>
                <p className="text-gray-800">
                    {description}
                </p>
            </div>
            <div className='text-center'>
                <Link to='/' className='btn bg-purple-700 w-48 mr-5'>Back to Home</Link>
                <Link to='/alltoys' className='btn bg-purple-700 w-48'>Back to All Toys</Link>
            </div>
        </div>
    );
};

export default SingleToy;