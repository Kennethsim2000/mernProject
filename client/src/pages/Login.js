import React, { useState } from 'react';
import '../Styles/Login.css';
import Navbar from '../components/Navbar';
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  // const Div = styled.div`
  //   display:flex;
  //   align-items:center;
  //   justify-content:flex-start;
  //   flex-direction:row;
  // `
  const navigate = useNavigate();
  const [posts, setPosts] = useState("");

  const [values, setValues] = useState({
    username:"",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
  
    let databody={
      "fullname":values.fullname,
      "username":values.username,
      "email":values.email,
      "password":values.password,
    }
    fetch('/Login',{
      method:'POST',
      body:JSON.stringify(databody),
      headers:{
         'Content-type': 'application/json'
      },
   })
   // .then(res=>res.JSON())
  .then(res=>{
   console.log("successfully returned a response object");
     if(res.status===200){
       console.log("SUCCESS Logging in");
       navigate('/Booking');
     } else if(res.status === 409){
       console.log("Password is wrong");
       setPosts("Password is incorrect");
     } else{
       console.log("user does not exist!");
       setPosts("User does not exist");
     }
  })
  .then((data)=>{
        console.log(data);
  })
  .catch(error=>console.log('Error posting in react'));
    // axios.get('/Login')
    // .then(response=>{
    //   console.log(response.data);
    //   setPosts(response.data);
    //   console.log("data retrieval done");
    // })
    // .catch(error=>console.log('ERROR'));
  };

 
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    
    <div className="body">
      <Navbar/>
     
          <form className="signupform">
            <h1 style={{justifyContent:"center",marginTop:'0px'}}>Login to your account</h1>
            <hr
            style={{
              marginTop: '0px',
              backgroundColor:"white"
            }}
            />
         
            <input
            style={{marginTop:"20px"}}
              className="inputLogin"
              type="text"
              name="username"
              placeholder="Username"
                onChange={handleChange}
                value={values.username}
            />
      
            <input
              style={{marginTop:"20px"}}
              className="inputLogin"
              type="password"
              name="password"
              placeholder="Password"
               onChange={handleChange}
                value={values.password}
            />
        

          <div style={{}}>
          <div style={{marginTop:"15px", display:'inline-block'}}>
            <a href="/forgot" style={{color:"white", textDecoration:"none"}}>Forgot Password?</a>
          </div>

          <div className="loginError" style={{display:'inline-block',marginLeft:'7rem' }}>
            {posts}
          </div>

          </div>
          



            <button style={{marginTop:"20px", marginBottom:"10px"}} 
            className="but" onClick={handleLogin} >
              Log In
            </button>
          

          </form>

      
      
      
      
    </div>
  );
}

export default Login;