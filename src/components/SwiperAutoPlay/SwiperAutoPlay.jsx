import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const SwiperAutoPlay = () => {
    return (
        <div>
            <h1 className='text-2xl md:text-4xl font-bold mt-10 mb-10 text-center text-purple-700'>Just Swipe And See More Toy Cars</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/175542966/photo/toy-fire-engine-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=e9RE3mR30buV1nZoFkMx1Q3noIVtREK3iD26FlKdVHw=" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/121666842/photo/blue-toy-car-trabant-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=h2PsxJoeiNWbSyfG5qhRtTPMWgWs1icBjSNXQbNJsZQ=" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/533259759/photo/red-fire-truck.jpg?b=1&s=170667a&w=0&k=20&c=Hw-xZ6nwbL6avuy_A_vfGmFSl7x3SvLxlwtMxrujvq0=" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/182176558/photo/teal-toy-car-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=ZP6bLpEaBuf2I30YmxW-p-hZ0CDKp6Xk27srV1yB8g4=" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/680079488/photo/retro-car-orange-1960.jpg?b=1&s=170667a&w=0&k=20&c=XRq_2v2IXp6AONLJxddQtgvfh15mGNqgSZ3XyvjO_u4=" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/103951179/photo/wooden-toy-racer-pinewood-derby.jpg?b=1&s=170667a&w=0&k=20&c=Eez_la-Xt5TpLQJQo15RK27EVycWh3uLKIcAwGruF-w=" alt="" />
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default SwiperAutoPlay;