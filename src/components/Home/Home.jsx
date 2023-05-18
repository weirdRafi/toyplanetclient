import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <section className='mt-5'>
                <h1 className='text-4xl font-bold mt-5 mb-5 text-center'>Gellary section</h1>
                <div className='grid md:grid-cols-3 gap-2'>
                    <img className='border rounded-lg hover:bg-purple-400 shadow-xl w-96 h-64 p-5' src="/public/img8.jpg" alt="" />
                    <img className='border rounded-lg hover:bg-purple-400 shadow-xl w-96 h-64 p-5' src="/public/img5.jpg" alt="" />
                    <img className='border rounded-lg hover:bg-purple-400 shadow-xl w-96 h-64 p-5' src="/public/img6.jpg" alt="" />
                    <img className='border rounded-lg hover:bg-purple-400 shadow-xl w-96 h-64 p-5' src="/public/img7.jpg" alt="" />
                    <img className='border rounded-lg hover:bg-purple-400 shadow-xl w-96 h-64 p-5' src="/public/img8.jpg" alt="" />
                    <img className='border rounded-lg hover:bg-purple-400 shadow-xl w-96 h-64 p-5' src="/public/img1.jpg" alt="" />
                </div>

            </section>

            <section className='mt-5 mb-5'>
                 <h1 className='text-4xl font-bold mt-5 mb-5 text-center'>Shop by Category</h1>
                <Tabs className='text-center'>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default Home;