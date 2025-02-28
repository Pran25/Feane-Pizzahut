import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


function Testimonials() {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        prevArrow: <FaChevronCircleLeft />,
        nextArrow: <FaChevronCircleRight />,
    };

    return (
        <div>
            <h1 style={{ fontFamily: "brush script mt" }}>What Says Our Customers</h1>
            <div className="slider-container">
                <Slider ref={slider => {
                    sliderRef = slider;
                }}
                    {...settings}>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <h4>Moana Michell</h4>
                            <p>Magna Alique</p>
                        </div>
                        <img src='./images/client1.jpg' alt='Moana' className='img-fluid mx-auto d-block rounded-circle border-warning-4  border  mt-3  border-4  h-25  w-25  float-start' />
                    </div>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <h4>Mike Hamell</h4>
                            <p>Magna Alique</p>
                        </div>
                        <img src='./images/client2.jpg' alt='Mike' className='img-fluid mx-auto d-block rounded-circle border-warning-4 border mt-3 border-4 float-start h-25 w-25' />
                    </div>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <h4>Moana Michell</h4>
                            <p>Magna Alique</p>
                        </div>
                        <img src='./images/client1.jpg' alt='Moana' className='img-fluid mx-auto d-block rounded-circle border-warning-4 border mt-3 border-4 float-start h-25 w-25' />
                    </div>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <h4>Mike Hamell</h4>
                            <p>Magna Alique</p>
                        </div>
                        <img src='./images/client2.jpg' alt='Mike' className='img-fluid mx-auto d-block rounded-circle border-warning-4 border mt-3 border-4 float-start h-25 w-25 ' />
                    </div>
                </Slider>
                <FaChevronCircleLeft className='text-warning fs-1 me-2' onClick={previous} />
                <FaChevronCircleRight className='text-warning fs-1 ' onClick={next} />
            </div>
        </div>
    )
}

export default Testimonials
