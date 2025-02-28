import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-dark text-white mt-5 p-4'>
    <Container>
    <div className='row'>
    <div className='col'>
    <h2 className='mb-3 mt-4'style={{fontFamily:"brush script mt "}}>Contact US</h2>
    <p><Link to='/' className='text-white'><FaLocationDot /> Location</Link></p>
    <p><Link to='/' className='text-white'><CiPhone />Call +01 1234567890</Link></p>
    <p><Link to='/' className='text-white'><FaEnvelope /> feane@gmail.com</Link></p>
    </div>

    <div className='col'>
    <h2 className='mb-3 mt-4 'style={{fontFamily:"brush script mt "}}>Feane</h2>
    <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
    <Link className='text-white fs-2 me-2'><FaFacebook /></Link>
    <Link className='text-white fs-2 me-2'><AiFillTwitterCircle /></Link>
    <Link className='text-white fs-1 me-2'><TiSocialLinkedinCircular /></Link>
    <Link className='text-white fs-2 me-2'><FaInstagram className='text-dark bg-white rounded-circle' /></Link>
    <Link className='text-white fs-2 me-2'><FaPinterest /></Link>
    </div>

    <div className='col'>
    <h2 className='mb-3 mt-4 'style={{fontFamily:"brush script mt "}}>Opening Hours</h2>
    <p>Everyday</p>
    <p>10.00 AM - 10.00 PM</p>
    </div>
    </div>

    <div>
    <p className='mt-4' >&copy; 2024 All Rights Reserved By Feane Restaurent </p>
    <p className='pd-5'>&copy; Distributed By Pranav Pardeshi</p>
    </div>
    </Container>
    </div>
  )
}

export default Footer
