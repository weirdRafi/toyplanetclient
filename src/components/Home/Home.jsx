
import 'react-tabs/style/react-tabs.css';
import Subcategory from '../Subcategory/Subcategory';
import SwiperAutoPlay from '../SwiperAutoPlay/SwiperAutoPlay';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rivew from '../Rivew/Rivew';
import ImageGellary from '../ImageGellary/ImageGellary';
import Slider from '../Slider/Slider';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the duration for animations (in milliseconds)
            once: true, // Enable animations only once
            easing: 'ease-in-out', // Set the easing function for animations
            // Additional configuration options for AOS can be added here
        });
    }, []);
    return (

        <div className='w-10/12 mx-auto'>
            <div data-aos="fade-down">
                <h1 className='text-purple-700 text-2xl text-center mt-5 font-bold'>Welcome To ToyPlanet!!</h1>
            </div>
            
            <Slider></Slider>
            <ImageGellary></ImageGellary>
            <Subcategory></Subcategory>
            <SwiperAutoPlay></SwiperAutoPlay>
            <Rivew></Rivew>
        </div>
    );
};

export default Home;