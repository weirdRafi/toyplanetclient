import React from 'react';

const ImageGellary = () => {
    return (
        <section className='mt-10'>
        <h1 className='text-4xl font-bold mt-5 mb-10 text-center text-purple-700'>Gellary section</h1>
        <div className='grid md:grid-cols-3 mx-auto gap-2'>
            <div data-aos="fade-down">
                <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="https://i.ibb.co/6wtDXtf/img1.jpg" alt="" />
            </div>
            <div data-aos="fade-down">
                <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="https://i.ibb.co/WHfQYT7/img3.jpg" alt="" />
            </div>
            <div data-aos="fade-down">
                <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="https://i.ibb.co/4j17vmY/img5.jpg" alt="" />
            </div>
            <div data-aos="fade-up">
                <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="https://i.ibb.co/80sV2KC/img6.jpg" alt="" />
            </div>
            <div data-aos="fade-up">
                <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="https://i.ibb.co/z8gTL27/img8.jpg" alt="" />
            </div>
            <div data-aos="fade-up">
                <img className=' rounded-lg border-4 shadow-xl w-96 h-64 p-5' src="https://i.ibb.co/qRZ1vWm/img7.jpg" alt="" />
            </div>

        </div>

    </section>
    );
};

export default ImageGellary;