import React from 'react';

const Rivew = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-purple-700 text-center mb-8">Client Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-purple-700 shadow rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-10 h-10 rounded-full mr-3"
                                src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?size=626&ext=jpg&ga=GA1.1.1418461367.1666450931&semt=ais"
                                alt="Client"
                            />
                            <p className="text-white font-semibold">John Doe</p>
                        </div>
                        <p className="text-white">
                            "I recently purchased the "Super Speed Racer" toy car for my son, and it has exceeded all expectations. This toy car delivers a thrilling racing experience that keeps my son entertained for hours."
                        </p>
                    </div>
                    <div className="bg-purple-700 shadow rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-10 h-10 rounded-full mr-3"
                                src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?size=626&ext=jpg&ga=GA1.1.1418461367.1666450931&semt=ais" 
                                alt="Client"
                            />
                            <p className="text-white font-semibold">Jane Smith</p>
                        </div>
                        <p className="text-white">
                            "I recently purchased the "Super Speed Racer" toy car for my son, and it has exceeded all expectations. This toy car delivers a thrilling racing experience that keeps my son entertained for hours."
                        </p>
                    </div>
                    <div className="bg-purple-700 shadow rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-10 h-10 rounded-full mr-3"
                                src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?size=626&ext=jpg&ga=GA1.1.1418461367.1666450931&semt=ais" 
                                alt="Client"
                            />
                            <p className="text-white font-semibold">David Williams</p>
                        </div>
                        <p className="text-white">
                            "I recently purchased the "Super Speed Racer" toy car for my son, and it has exceeded all expectations. This toy car delivers a thrilling racing experience that keeps my son entertained for hours."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rivew;