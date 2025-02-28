import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import About from './About';
import Booking from './Booking';
import Testimonials from './Testimonials';


function Home() {
  return (
    <div>
      <Carousel className='bgimage text-white p-5 '>
        <Carousel.Item>
          <div className='w-50 text-start p-4 mb-5'>
            <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast Food Restaurent</h1>
            <p className='fs-5'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-5'>Order Now</Button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='w-50 text-start p-4 mb-5'>
            <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast Food Restaurent</h1>
            <p className='fs-5'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-5'>Order Now <FaShoppingCart /></Button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='w-50 text-start p-4 mb-5'>
            <h1 className='display-3' style={{ fontFamily: "brush script mt" }}>Fast Food Restaurent</h1>
            <p className='fs-5 '>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-5'>Order Now</Button>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container>
        <div className='row mt-5'>
          <div className='col'>
            <div className='d-flex bg-dark text-white flex-start'>
              <div className='col-4 p-2'>
                <img src='./images/o1.jpg' alt='' className='rounded-circle border-warning border-2 border h-100 w-100 image1' />
              </div>
              <div className=' col-8 p-2 text-start'>
                <h2 style={{ fontFamily: "brush script mt" }}>Tasty Thursdays</h2>
                <h1 className='display-5' style={{ fontFamily: "brush script mt" }}>20 % <span className='fs-2'>Off</span></h1>
                <Button variant="warning" className='text-white fs-5 px-4 rounded-pill '>Order Now <FaShoppingCart /></Button>
              </div>
            </div>

          </div>
          <div className='col'>
          <div className='d-flex bg-dark text-white flex-start'>
          <div className='col-4 p-2'>
            <img src='./images/o2.jpg' alt='' className='rounded-circle border-warning border-2 border h-100 w-100 image1' />
          </div>
          <div className=' col-8 p-2 text-start'>
            <h2 style={{ fontFamily: "brush script mt" }}>Pizza Days</h2>
            <h1 className='display-5' style={{ fontFamily: "brush script mt" }}>15 % <span className='fs-2'>Off</span></h1>
            <Button variant="warning" className='text-white fs-5 px-4 rounded-pill '>Order Now <FaShoppingCart /></Button>
          </div>
        </div>


          </div>
        </div>
      </Container>
      <About/>
      <Booking/>
      <Testimonials/>
    </div>
  )
}

export default Home
