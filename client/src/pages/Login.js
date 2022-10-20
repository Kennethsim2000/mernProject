import React, { useState } from 'react';
import '../Styles/Login.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState("");

  const [values, setValues] = useState({
    username:"",
    password: "",
  });

  /*handleLogin handles the onclick of the login button. It does a post request on the /Login route
   */
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
  .then(res=>{
     if(res.status===200){
       navigate('/Booking');
     } else if(res.status === 409){
       setPosts("Password is incorrect");
     } else{
       setPosts("User does not exist");
     }
  })
  .then((data)=>{
        console.log(data);
  })
  .catch(error=>console.log('Error posting in react'));
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