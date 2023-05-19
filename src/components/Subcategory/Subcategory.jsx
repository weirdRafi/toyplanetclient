import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';


const Subcategory = () => {

    const [toys, setToys] = useState([]);
    const [active, setActive] = useState("classicCars");
    

    useEffect(() => {
        fetch(`http://localhost:3000/alltoys/${active}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data);
            })
    }, [active])

    const handleTab = (tab) => {
        setActive(tab);
    };

    return (
        <section className='mt-10 mb-5'>
            <h1 className='text-4xl font-bold mt-10 mb-10 text-center'>Shop by Category</h1>


            <div>
                <div className="tab-container flex justify-center text-center mx-auto">
                    <div className="text-center w-100 m-auto">
                        <div className="tabs d-flex justify-content-center align-items-center">
                            <div
                                onClick={() => handleTab("classicCars")}
                                className={`tab  tab2 remote ${active == "classicCars" ? " bg-purple-700 rounded-2xl text-white" : "border-4 text-purple-700 rounded-2xl"
                                    }`}
                            >
                                ClassicCars
                            </div>
                            <div
                                onClick={() => handleTab("racingCars")}
                                className={`tab  tab2 Offline ${active == "racingCars" ? " bg-purple-700 rounded-2xl text-white" : "border-4 text-purple-700 rounded-2xl"
                                    }`}
                            >
                                RacingCars
                            </div>
                            <div
                                onClick={() => handleTab("fireTrucks")}
                                className={`tab  tab2 Offline ${active == "fireTrucks" ? " bg-purple-700 rounded-2xl text-white" : "border-4 text-purple-700 rounded-2xl"
                                    }`}
                            >
                                FireTrucks
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-5 md:grid grid-cols-3">
                    {
                        toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Subcategory;