import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const updatedToy = useLoaderData()

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price= form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const user={
            price,
            quantity,
            description
        }
        fetch(`http://localhost:3000/update/${updatedToy._id}`,{
            method: 'PATCH',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'Successfully Updated',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })

    }

    return (
        <div>
            <div className="bg-purple-500 py-8 px-4">
                <h2 className="text-white text-center text-2xl font-bold mb-4">Update Product</h2>

                <form onSubmit={handleUpdateToy} className="max-w-md mx-auto bg-white rounded-lg px-8 py-6">
                    <div className="mb-4">
                        <label htmlFor="price" className="text-gray-800 block font-bold mb-2">
                            Price
                        </label>
                        <input
                            defaultValue={updatedToy?.price}
                            name='price'
                            type="text"
                            id="price"
                            className="w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="quantity" className="text-gray-800 block font-bold mb-2">
                            Available Quantity
                        </label>
                        <input
                            name='quantity'
                            defaultValue={updatedToy?.quantity}
                            type="text"
                            id="quantity"
                            className="w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="text-gray-800 block font-bold mb-2">
                            Detail Description
                        </label>
                        <textarea
                            name='description'
                            defaultValue={updatedToy?.description}
                            id="description"
                            className="w-full border border-gray-300 py-2 px-3 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            rows="4"
                        ></textarea>
                    </div>

                    <input
                        type="submit"
                        value='Update'
                        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                   
                </form>
            </div>
        </div>
    );
};

export default Update;