import React from 'react';

const Carousel = () => {
    return (

        <div className="carousel w-full h-96 mt-5 shadow-xl">
            <div id="slide1" className="carousel-item relative w-full">

                <img src="/public/img1.jpg" className="w-full" />
                <div className='flex items-center '>
                    <div className='mr-32 md:text-3xl ml-10'>
                        <h1 className='text-4xl font-bold'>ToyCars</h1>
                        Toy cars are miniature replicas of <br /> real automobiles designed for play and entertainment purposes
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="/public/img2.jpg" className="w-full" />
                <div className='flex items-center'>
                    <div className='mr-32 md:text-3xl  ml-10'>
                        <h1 className='text-4xl font-bold'>ToyCars</h1>
                        Toy cars are miniature replicas of <br /> real automobiles designed for play and entertainment purposes
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="/public/img3.jpg" className="w-full" />
                <div className='flex items-center'>
                    <div className='mr-32 md:text-3xl  ml-10'>
                        <h1 className='text-4xl font-bold'>ToyCars</h1>
                        Toy cars are miniature replicas of <br /> real automobiles designed for play and entertainment purposes
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="/public/img4.jpg" className="w-full" />
                <div className='flex items-center'>
                    <div className='mr-32 md:text-3xl ml-10'>
                        <h1 className='text-4xl font-bold'>ToyCars</h1>
                        Toy cars are miniature replicas of <br /> real automobiles designed for play and entertainment purposes
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