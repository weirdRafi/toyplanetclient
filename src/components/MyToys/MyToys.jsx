import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToys = () => {
    const {user}= useContext(AuthContext)
    const [mytoys, setMytoys] = useState([])

    const url = `http://localhost:3000/alltoys?sellerEmail=${user.email}`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data);

            setMytoys(data);
        })
    },[url])

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:3000/sigletoy/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = mytoys.filter(mytoy => mytoy._id !== _id)
                            setMytoys(remaining)
                        }
                    })
                }
            })
    }

    return (
        <div>
            <div className='h-screen'>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Seller</th>
                            <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Toy Name</th>
                            <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Sub-category</th>
                            <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Price</th>
                            <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Available Quantity</th>
                            <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Actions</th>
                            <th className="py-2 px-4 border-b-2 bg-gray-200 font-medium text-sm text-gray-800">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {mytoys.map((toy) => (
                            <tr key={toy._id}>
                                <td className="py-2 px-4 border-b text-sm">{toy.sellerName}</td>
                                <td className="py-2 px-4 border-b text-sm">{toy.name}</td>
                                <td className="py-2 px-4 border-b text-sm">{toy.subcategory}</td>
                                <td className="py-2 px-4 border-b text-sm">$ {toy.price}</td>
                                <td className="py-2 px-4 border-b text-sm">{toy.quantity}</td>
                                <td className="py-2 px-4 border-b text-sm">
                                    <Link to={`/update/${toy._id}`} className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded-md">
                                        Update
                                    </Link>
                                </td>
                                <td className="py-2 px-4 border-b text-sm">
                                    <button onClick={() => handleDelete(toy._id)} className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded-md">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;