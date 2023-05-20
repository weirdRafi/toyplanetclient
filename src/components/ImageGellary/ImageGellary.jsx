import React from 'react';

const ImageGellary = () => {
    return (
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
    );
};

export default ImageGellary;