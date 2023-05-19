import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { url, name, sellerName, sellerEmail, subcategory, price, rating, quantity, description } = toy || {};
    return (
        <div>
            <div className="w-96 mx-auto mt-5 mb-5 bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    className="object-cover w-full h-48"
                    src={url}
                    alt="Toy"
                />

                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800"> {name}</h3>
                    
                    <p className="text-gray-600"><strong>Price:</strong> ${price}</p>
                    <p className="text-gray-600"><strong>Rating:</strong> {rating}</p>
                    
                </div>
                <div className='text-center'>
                    <Link to='/alltoys' className='btn bg-purple-700 w-full'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;