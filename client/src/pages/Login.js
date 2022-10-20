import React, { useState } from 'react';
import '../Styles/Login.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState(""); //post is used to store the error message

  const [values, setValues] = useState({ //values have 
    username:"",
    password: "",
  });

  /*handleLogin handles the onclick of the login button. It does a post request on the /Login route, each
  returns a response whether anot a user is found in the database.*/
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

  /*Used to update state of input boxes. */
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
          <h1 className="loginHeader" >Login to your account</h1>
          <hr className="loginLine"/>
          <input
              className="inputLogin"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={values.username}
          />
          <input
              className="inputLogin"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
          />
          <div >
            <div style={{marginTop:"15px", display:'inline-block'}}>
              <a href="/forgot" style={{color:"white", textDecoration:"none"}}>Forgot Password?</a>
            </div>
            <div className="loginError" >
              {posts}
            </div>
          </div>

          <button className="but" onClick={handleLogin} >
            Log In
          </button>
          

          </form>

      
      
      
      
    </div>
  );
}

export default Login;