import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { _id, url, name, price, rating } = toy || {};

    return (
        <div>
            <div className="w-72 border-2 mx-auto mt-5 mb-5 bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    className="object-cover w-full h-48 p-3"
                    src={url}
                    alt="Toy"
                />

                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800"> {name}</h3>
                    
                    <p className="text-gray-600"><strong>Price:</strong> ${price}</p>
                    <p className="text-gray-600"><strong>Rating:</strong> {rating}</p>
                    
                </div>
                <div className='text-center'>
                    <Link to={`singleToy/${toy._id}`} className='btn bg-purple-700 w-full'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;