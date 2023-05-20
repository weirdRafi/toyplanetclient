import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([])
    const [Search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/alltoys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:3000/toySearch/${Search}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }

    return (
        <div className='h-screen mt-10'>
            <div className="flex items-center justify-center">
                <div className="flex">
                    <input 
                    onChange={(e)=> setSearch(e.target.value)}
                        type="text"
                        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                        placeholder="Search..."
                    />
                    <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                        Search
                    </button>

                </div>
            </div>
            <table className="w-full border-collapse mt-10">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Seller</th>
                        <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Toy Name</th>
                        <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Sub-category</th>
                        <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Price</th>
                        <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Available Quantity</th>
                        <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {toys.map((toy) => (
                        <tr key={toy._id}>
                            <td className="py-2 px-4 border-b text-sm">{toy.sellerName}</td>
                            <td className="py-2 px-4 border-b text-sm">{toy.name}</td>
                            <td className="py-2 px-4 border-b text-sm">{toy.subcategory}</td>
                            <td className="py-2 px-4 border-b text-sm">$ {toy.price}</td>
                            <td className="py-2 px-4 border-b text-sm">{toy.quantity}</td>
                            <td className="py-2 px-4 border-b text-sm">
                                <Link to={`/singleToy/${toy._id}`} className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded-md">
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;