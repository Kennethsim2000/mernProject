import React, { useEffect, useState, useRef } from "react";
import validation from "./Validation";
import CenteredModal from './modal';


const SignupForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: "",
    username:"",
    email: "",
    password: "",
  });
/*we have 3 states, errors which represent the errors in the form, 
dataIsCorrect which makes sure that there is no errors */
  const [errors, setErrors] = useState({});
  // const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [loginError,setLoginError] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const errorObj=validation(values);
    setErrors(errorObj);

    if (Object.keys(errorObj).length === 0 ) {
      postData();
     }
  };

  const postData = () =>{
    console.log('code comes to postData');
    let databody={
      "fullname":values.fullname,
      "username":values.username,
      "email":values.email,
      "password":values.password,
    }
    fetch('/Signup',{
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
        console.log("SUCCESS in react");
        setLoginError(false);
        setModalShow(true);
        return res.json();
      } else if(res.status === 409){
        console.log("User already exist in react");
        setLoginError(true);
      } else{
        console.log(res.message);
      }
   })
   .then((data)=>{
         console.log(data);
   })
   .catch(error=>console.log('Error posting in react'));


  }
  /* we set dataIsCorrect to true if there is no errors*/
//    useEffect(() => {
//      if (Object.keys(errors).length === 0 ) {
//       console.log("it is inside useEffect");
//        setDataIsCorrect(true);
//      } else {
//       setDataIsCorrect(false);
//       console.log("it is inside useEffect2");
//      }

//  }, [errors]);

  return (
      <form className="app-wrapper">
        <h2 className="title1">Create Account</h2>
        <h3 style={{color:'grey'}}>Please fill in this form to create an account!</h3>

        <label className="label">Full Name</label>
        <input
            className="input"
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
        />
        {errors.fullname && <p className="error"> {errors.fullname} </p>}
         
        <label className="label">Username</label>
        <input
          className="input"
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error"> {errors.username} </p>}
      
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error"> {errors.email} </p>}

        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error"> {errors.password} </p>}

        <button className="submit" onClick={handleFormSubmit}>
          Sign Up
        </button>

        {loginError?<p className="error">Username taken. Choosen another username</p>:null}

        <CenteredModal
       show={modalShow}
       onHide={()=>setModalShow(false)}/>

       
      </form>
     
  );
};

export default SignupForm;
