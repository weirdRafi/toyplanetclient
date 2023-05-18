import React from 'react';

const AddAToy = () => {
    return (
        <div>
            <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Toy</h2>
                <form>
                    <div className="mb-6">
                        <label htmlFor="pictureUrl" className="block text-gray-700 text-sm font-medium mb-1">
                            Picture URL of the toy
                        </label>
                        <input
                            type="text"
                            id="pictureUrl"
                            name="pictureUrl"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter the name of the toy"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="sellerName" className="block text-gray-700 text-sm font-medium mb-1">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter the seller email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subcategory" className="block text-gray-700 text-sm font-medium mb-1">
                            Sub-category
                        </label>
                        <select
                            id="subcategory"
                            name="subcategory"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select a sub-category</option>
                            <option value="mathToys">Math Toys</option>
                            <option value="languageToys">Language Toys</option>
                            <option value="scienceToys">Science Toys</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-medium mb-1">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter the price of the toy"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rating" className="block text-gray-700 text-sm font-medium mb-1">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter the rating of the toy"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="quantity" className="block text-gray-700 text-sm font-medium mb-1">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter the detailed description of the toy"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Add Toy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;