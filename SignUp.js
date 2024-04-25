import React, { useEffect, useState } from "react";
import '../../App.css';


const ExTen = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const special = ['@', "#", "$", "%", "^", "&", "*", "(", ")", "[", "]"];
  const [user, setUser] = useState({
  name: "",
  password: "",
  email: "",
  dob: "",
  phone: "",
  });
  const [gender, setGender] = useState("Male");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [display, setDisplay] = useState(false);
  const [register, setRegister] = useState(false);
  const nameHandler = (event) => {
  setUser({ ...user, name: event.target.value });
  };
  const phoneHandler = (event) => {
  setUser({ ...user, phone: event.target.value });
  };
  const emailHandler = (event) => {
  setUser({ ...user, email: event.target.value });
  };
  const passwordHandler = (event) => {
  setUser({ ...user, password: event.target.value });
  };
  const DOBHandler = (event) => {
  setUser({ ...user, dob: event.target.value });
  };
  const confirmPasswordHandler = (event) => {
  setConfirmPassword(event.target.value);
  };
  const genderHandler = (event) => {
  setGender(event.target.value);
  };
  const submitHandler = (event) => {
  event.preventDefault();
  if (user.name.includes(...special)) {
  alert("Username Cannot Contain Special Charcter");
  setDisplay(true);
  return;
  }
  if (user.phone.length > 10 || user.phone.length < 10) {
  alert("Phone Number Must Be 10 Digits");
  setDisplay(true);
  return;
  }
  if (user.password.length < 6) {
  alert("Password Length Must Be Atleast 6");
  setDisplay(true);
  return;
  }
  if (
  !user.password.includes(...numbers) &
  !user.password.includes(...special)
  ) {
  alert("Password Must Contain Number and Special Characters");
  setDisplay(true);
  return;
  }
  if (user.password !== confirmPassword) {
  alert("Password Does Not Match Confirm Password");
  setDisplay(true);
  return;
  }
  if (
  user.name.length <= 0 ||
  user.email.length <= 0 ||
  user.phone.length <= 0 ||
  user.password.length <= 0 ||
  user.dob.length <= 0
  ) {
  alert("All Fields Must Be Filled");
  setDisplay(true);
  return;
  }
  alert("Registration Successful");
  setDisplay(false);
  setRegister(true);
  setUser({
  name: "",
  password: "",
  email: "",
  dob: "",
  phone: "",
  });
  setConfirmPassword("");
  };
  useEffect(() => {
  if (register) {
  setTimeout(() => {
  setRegister(false);
  }, 2000);
  }
  });
  return (
  <>
  <div className='form-modal__container'>
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src='/images/img-8.jpg' alt='Camels in the desert'></img>
        </div>
        
  <div className="sign-up__container">
  <h3 >Sign Up</h3>
  
  <form onSubmit={submitHandler}>
  <div>
    <label>Username: </label>
  <input 
  type="text"
  placeholder="Username"
  value={user.name}
  onChange={nameHandler}
  />
  </div>
  
  <div>
    <label>Enter your email id: </label>
  <input
  type="email"
  name=""
  id=""
  placeholder="example@gmail.com"
  value={user.email}
  onChange={emailHandler}
  />
  </div>
  <div>
  <label>Enter password: </label>
  <input
  type="password"
  name=""
  id=""
  placeholder="Your Password"
  value={user.password}
  onChange={passwordHandler}
  />
  </div>
  <div>
  <label>Confirm password: </label>
  <input
  type="password"
  name=""
  id=""
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={confirmPasswordHandler}
  />
  </div>
  <label>Mobile number:</label>
  <div>
  <input
  type="text"
  name=""
  id=""
  placeholder="9458475382"
  value={user.phone}
  onChange={phoneHandler}
  />
  </div>
  <div>
  <label>Select Date Of Birth</label>
  </div>
  
  <div>
  <input
  type="date"
  name=""
  id=""
  value={user.dob}
  onChange={DOBHandler}
  />
  </div>
  <div>
    <label>Gender: </label>
  <select name="" id="" value={gender} onChange={genderHandler}>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  </select>
  </div>
  <div className="text-center my-2">
  <button>Submit</button>
  </div>
  
  </form>
  </div>
  </div>
  </div>
  {display ? (
  <div className="container-fluid text-center mx-3 d-flex justify-content-center align-items-center">
  <div className="bg-danger text-light w-50 p-4">{message}</div>
  </div>
  ) : null}
  {register ? (
  <div className="container-fluid text-center mx-3 d-flex justify-content-center align-items-center my3">
  <div className="bg-success text-light w-75 w-md-50 p-1 p-md-4">
  {successMessage}
  <br />
  
  </div>
  </div>
  ) : null}
  </>
  );
  };
  export default ExTen;