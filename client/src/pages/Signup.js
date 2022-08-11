import React, { useState } from 'react';
import "../auth/Signup.css";
import SignupForm from "../auth/SignupForm";
import SignupFormSuccess from "../auth/SignupFormSuccess";
import styled from "styled-components";
import Navbar from '../components/Navbar'
import Typed from 'react-typed';
import Footer from '../components/Footer';

function Signup() {
  const [formIsSubmitted,setFormIsSubmitted] = useState(false);
  const submitForm = () =>{
    setFormIsSubmitted(true);
  }

 

  return (
    <div className ='signupdiv'>
      <Navbar/>
      <Typed 
      style={{color:'black', fontWeight:'600', display:'flex',justifyContent:'center',alignItems:'center',fontSize:'56px'}}
      strings={['Sign Up and travel with us!']}
      typeSpeed={40}
      loop/>
     <SignupForm submitForm={submitForm} />
    <h2 style={{display:'flex',justifyContent:'center', fontSize:'20px', marginTop:'16px', color:'white' , marginBottom:'0px'}} >Already have an account? &nbsp;<a href='/login' style={{color:'white'}}>Login here</a></h2>
       
    </div>
  );
}

export default Signup;