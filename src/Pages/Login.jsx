import React, { useState } from 'react';
import {Button,} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "../CSS/LoginPage.css";
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const [validated, setValidated] = useState(false);
    const[showPassword,setShowPassword] = useState(false);
    const[formData,setFormData]=useState({
    email:"User123@gmail.com",
    password:"User@123",
    })
    const handleChanges=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const{email,password}=formData;
        if(email !== "User123@gmail.com"  || password !== "User@123"){
          toast.error("Provide Correct Email and Password");
          setValidated(true);
        }else{
         const postData={email,password}
         console.log(postData)

          setFormData({
            email:"",
            password:"",
            
          })
          setValidated(false)
        }
      
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
       
      
    }
  return (
    <div className="mb-1 d-flex justify-content-center align-items-center vh-100 loginPage">
    


      <Form className='Login' noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <div className="w-100 m-1">
      <Form.Label>Email Address</Form.Label> 
      <InputGroup hasValidation>
        <Form.Control
          type="email"
          name='email'
          id="email"
          value={formData.email}
          onChange={handleChanges}
          placeholder="Enter Email"
          aria-describedby="inputGroupPrepend"
          required
        />

        <Form.Control.Feedback type="invalid">
             Please provide email address
            </Form.Control.Feedback>
            </InputGroup>
        </div>

        <div className="w-100 m-1">
        <Form.Label>Password</Form.Label> 
        <InputGroup hasValidation>
        <Form.Control
          type={showPassword ? "text":"password"}
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChanges}
          placeholder="Enter Password"
          aria-describedby="inputGroupPrepend"
          required
        />
        
          <Form.Control.Feedback type="invalid">
              Please provide password
            </Form.Control.Feedback>
            </InputGroup>
        </div>
        
        <Form.Group className="ms-2 gap-2 d-flex">
        <Form.Check type="checkbox" checked={showPassword} onChange={()=>setShowPassword(!showPassword)} />
        <Form.Label>Check Password</Form.Label> 
      </Form.Group>
      
      

        <div className="w-100 mt-3 ms-1">
        <Button variant="success" type='submit' className='w-100'>Login</Button>
        </div>
    </Form>  
    <ToastContainer />
    </div>
  )
}

export default Login