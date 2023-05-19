import React from 'react';

const Carousel = () => {
    return (

        <div className="carousel w-full h-96 mt-10 shadow-xl">
            <div id="slide1" className="carousel-item relative w-full">

                <img src="https://images.unsplash.com/photo-1587839871379-2d6c28071f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
                <div className='flex items-center '>
                    <div className='mr-32 md:text-3xl ml-10'>
                        <h1 className='text-4xl font-bold'>ToyCars</h1>
                        <p className='text-xl mt-5'>Toy cars are miniature replicas of <br /> real automobiles designed for play and entertainment purposes</p>
                        <button className='btn bg-purple-700 mt-5'>Show More</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="w-full" />
                <div className='flex items-center'>
                    <div className='mr-32 md:text-3xl  ml-10'>
                        <h1 className='text-4xl font-bold'>ToyCars</h1>
                        <p className='text-xl mt-5'>Toy cars are miniature replicas of <br /> real automobiles designed for play and entertainment purposes</p>
                        <button className='btn bg-purple-700 mt-5'>Show More</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1584641911111-4fee26b4cc8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
                <div className='flex items-center'>
                    <div className='mr-32 md:text-3xl  ml-10'>
                        <h1 className='text-4xl font-bold'>ToyCars</h1>
                        <p className='text-xl mt-5'>Toy cars are miniature replicas of <br /> real automobiles designed for play and entertainment purposes</p>
                        <button className='btn bg-purple-700 mt-5'>Show More</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1508112669284-33e37093fc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full" />
                <div className='flex items-center'>
                    <div className='mr-32 md:text-3xl ml-10'>
                        <h1 className='text-4xl font-bold'>ToyCars</h1>
                        <p className='text-xl mt-5'>Toy cars are miniature replicas of <br /> real automobiles designed for play and entertainment purposes</p>
                        <button className='btn bg-purple-700 mt-5'>Show More</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Carousel;