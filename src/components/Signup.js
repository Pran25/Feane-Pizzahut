import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [phone , setPhone] = useState("")
  const [city , setCity] = useState("")
  const [password , setPassword] = useState("")

  function adduser(e)
  {
    e.preventDefault()
    let user = {name,email,phone,city,password}
    fetch("http://localhost:3000/users",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
  }

  return (

    <div className='container text-start mt-5'>
      <h1 className='text-center mb-5' style={{ fontFamily: "brush script mt" }}> New Login Form</h1>

      <Form onSubmit={adduser}>
        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupname">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" className='w-50' value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupEmail">
          <Form.Label>Enter Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='w-50' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPhone">
          <Form.Label>Enter Phone</Form.Label>
          <Form.Control type="Phone" placeholder="Enter Phone number" className='w-50' value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupCity">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control type="city" placeholder="Enter City" className='w-50' value={city} onChange={(e)=>setCity(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3 d-flex justify-content-evenly" controlId="formGroupPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className='w-50' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className='mx-auto d-block'>
          Signin
        </Button>
      </Form>
    </div>
  )
}

export default Signup
