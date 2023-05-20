
import Carousel from '../Carousel/Carousel';
import 'react-tabs/style/react-tabs.css';
import Subcategory from '../Subcategory/Subcategory';
import SwiperAutoPlay from '../SwiperAutoPlay/SwiperAutoPlay';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rivew from '../Rivew/Rivew';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Set the duration for animations (in milliseconds)
            once: true, // Enable animations only once
            easing: 'ease-in-out', // Set the easing function for animations
            // Additional configuration options for AOS can be added here
        });
    }, []);
    return (
        <div><div data-aos="fade-down">
            <h1 className='text-purple-700 text-2xl text-center mt-5 font-bold'>Welcome To ToyPlanet!!</h1>
        </div>
            <Carousel></Carousel>
            <section className='mt-10'>
                <h1 className='text-4xl font-bold mt-5 mb-10 text-center text-purple-700'>Gellary section</h1>
                <div className='grid md:grid-cols-3 mx-auto gap-2'>
                    <div data-aos="fade-down">
                        <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="/public/img8.jpg" alt="" />
                    </div>
                    <div data-aos="fade-down">
                        <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="/public/img5.jpg" alt="" />
                    </div>
                    <div data-aos="fade-down">
                        <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="/public/img6.jpg" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="/public/img7.jpg" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="/public/img8.jpg" alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="/public/img1.jpg" alt="" />
                    </div>

                </div>

            </section>
            <Subcategory></Subcategory>
            <SwiperAutoPlay></SwiperAutoPlay>
            <Rivew></Rivew>
        </div>
    );
};

export default Home;