import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const AddAToy = () => {

    const { user } = useContext(AuthContext)


    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const url = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const user = {
            url,
            name,
            sellerName,
            sellerEmail,
            subcategory,
            price,
            rating,
            quantity,
            description
        }

        console.log(user);

        fetch('http://localhost:3000/upload', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Created!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            }) 



    }
    return (
        <div className="w-2/3 mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Toy</h2>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="mb-6">
                        <label htmlFor="pictureUrl" className="block text-gray-700 text-sm font-medium mb-1">
                            Picture URL of the toy
                        </label>
                        <input
                            type="text"
                            id="pictureUrl"
                            name="pictureUrl"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                            placeholder="Enter the picture URL of the toy"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                            placeholder="Enter the name of the toy"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="mb-6">
                        <label htmlFor="sellerName" className="block text-gray-700 text-sm font-medium mb-1">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                            value={user?.displayName}
                            placeholder="Enter the seller name (if available)"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="sellerEmail" className="block text-gray-700 text-sm font-medium mb-1">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                            value={user?.email}
                            placeholder="Enter the seller email"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="subcategory" className="block text-gray-700 text-sm font-medium mb-1">
                        Sub-category
                    </label>
                    <select
                        id="subcategory"
                        name="subcategory"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                    >
                        <option value="">Select a sub-category</option>
                        <option value="racingCars">Racing Cars</option>
                        <option value="classicCars">Classic Cars</option>
                        <option value="fireTrucks">Fire Trucks</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="price" className="block text-gray-700 text-sm font-medium mb-1">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                            placeholder="Enter the price of the toy"
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block text-gray-700 text-sm font-medium mb-1">
                            Rating
                        </label>
                        <input
                            type="text"
                            id="rating"
                            name="rating"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                            placeholder="Enter the rating of the toy"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="quantity" className="block text-gray-700 text-sm font-medium mb-1">
                        Available Quantity
                    </label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Enter the available quantity of the toy"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-1">
                        Detail Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        placeholder="Enter the detailed description of the toy"
                        rows="4"
                    ></textarea>
                </div>
                <div className="flex items-center justify-end">
                    <input
                        type="submit"
                        value='Add Toy'
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    />


                </div>
            </form>
        </div>
    );
};

export default AddAToy;