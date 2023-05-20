import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  const slide4Ref = useRef(null);

  const scrollToSlide = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  return (
    <div>
      <div className="carousel w-full h-96 mt-10 shadow-xl">
        <div id="slide1" className="carousel-item relative w-full" ref={slide1Ref}>
          {/* Slide 1 content */}
          <img
            src="https://images.unsplash.com/photo-1587839871379-2d6c28071f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full h-96"
          />

          <div className="flex items-center ">
            <div className="mr-32 md:text-3xl ml-10 hidden md:block">
              <h1 className="text-4xl font-bold text-purple-700 ">ToyCars</h1>
              <p className="text-xl mt-5 ">
                Toy cars are miniature replicas of
                <br /> real automobiles designed for play and entertainment purposes
              </p>
              <button className="btn bg-purple-500 hover:bg-purple-700  mt-5">
                Let's Explore&nbsp;
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 30 }} className="text-center text-white" />
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button onClick={() => scrollToSlide(slide4Ref)}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 30 }} className="text-center text-purple-700" />
              </button>
              <button onClick={() => scrollToSlide(slide2Ref)}>
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 30 }} className="text-center text-purple-700" />
              </button>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full" ref={slide2Ref}>
          {/* Slide 2 content */}
          <img
            src="https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="w-full h-96"
          />

          <div className="flex items-center ">
            <div className="mr-32 md:text-3xl ml-10 hidden md:block">
              <h1 className="text-4xl font-bold text-purple-700 ">ToyCars</h1>
              <p className="text-xl mt-5 ">
                Toy cars are miniature replicas of
                <br /> real automobiles designed for play and entertainment purposes
              </p>
              <button className="btn bg-purple-500 hover:bg-purple-700  mt-5">
                Let's Explore&nbsp;
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 30 }} className="text-center text-white" />
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button onClick={() => scrollToSlide(slide1Ref)}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 30 }} className="text-center text-purple-700" />
              </button>
              <button onClick={() => scrollToSlide(slide3Ref)}>
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 30 }} className="text-center text-purple-700" />
              </button>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full" ref={slide3Ref}>
          {/* Slide 3 content */}
          <img
            src="https://images.unsplash.com/photo-1584641911111-4fee26b4cc8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full h-96"
          />

          <div className="flex items-center ">
            <div className="mr-32 md:text-3xl ml-10 hidden md:block">
              <h1 className="text-4xl font-bold text-purple-700 ">ToyCars</h1>
              <p className="text-xl mt-5 ">
                Toy cars are miniature replicas of
                <br /> real automobiles designed for play and entertainment purposes
              </p>
              <button className="btn bg-purple-500 hover:bg-purple-700  mt-5">
                Let's Explore&nbsp;
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 30 }} className="text-center text-white" />
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button onClick={() => scrollToSlide(slide2Ref)}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 30 }} className="text-center text-purple-700" />
              </button>
              <button onClick={() => scrollToSlide(slide4Ref)}>
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 30 }} className="text-center text-purple-700" />
              </button>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full" ref={slide4Ref}>
          {/* Slide 4 content */}
          <img
            src="https://images.unsplash.com/photo-1508112669284-33e37093fc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="w-full h-96"
          />

          <div className="flex items-center ">
            <div className="mr-32 md:text-3xl ml-10 hidden md:block">
              <h1 className="text-4xl font-bold text-purple-700 ">ToyCars</h1>
              <p className="text-xl mt-5 ">
                Toy cars are miniature replicas of
                <br /> real automobiles designed for play and entertainment purposes
              </p>
              <button className="btn bg-purple-500 hover:bg-purple-700  mt-5">
                Let's Explore&nbsp;
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 30 }} className="text-center text-white" />
              </button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button onClick={() => scrollToSlide(slide3Ref)}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 30 }} className="text-center text-purple-700" />
              </button>
              <button onClick={() => scrollToSlide(slide1Ref)}>
                <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 30 }} className="text-center text-purple-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
