import { useState } from "react";
import sideImg from "../assets/sideImg.png";
import {  useNavigate } from "react-router-dom";

export default function Signup() {
  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
    mobile_number: "",
    checkbox: false,
  });
  const [error, setError] = useState({
    name: false,
    username: false,
    email: false,
    mobile_number: false,
    checkbox: false,
  });
  const handleInputChange = (e) => {
    setInputData((prevState) => {
      let newState = prevState;
      if (e.target.id === "checkbox")
        newState = { ...newState, [e.target.id]: e.target.checked };
      else {
        newState = { ...newState, [e.target.id]: e.target.value };
      }
      return newState;
    });
    if (!inputData[e.target.id]) {
      setError((prevState) => {
        return {
          ...prevState,
          [e.target.id]: false,
        };
      });
      
    }
  };

  const navigate = useNavigate();

  const handleInputFormSubmit = (e) => {
    e.preventDefault();
    validateInputs();
    let checkSize = 0;
    for (let key in error) {
      if (!error[key]) checkSize++;
    }
    if (checkSize === 5) {
        console.log("confirm")
      localStorage.setItem("userData", JSON.stringify(inputData));
      setInputData({
        name: "",
        username: "",
        email: "",
        mobile_number: "",
        checkbox: false,
      })
      navigate("/category")
    }
  };

  const validateInputs = () => {
    for (let key in inputData) {
      console.log(key, inputData[key]);
      if (!inputData[key]) {
        setError((prevState) => {
          return {
            ...prevState,
            [key]: true,
          };
        });
      }
    }
  };

  return (
    <>
      <div className="signup-page">
        <div className="signup-left-side">
          <img src={sideImg} alt="" />
          <p className="img-bottom-txt">Discover new things on Superapp</p>
        </div>
        <div className="signup-right-side-wrapper">
          <h1>Super app</h1>
          <p className="create-acc-txt">Create your new account</p>
          <form action="" onSubmit={handleInputFormSubmit}>
            <div
              className={error.name ? "input-control error" : "input-control"}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={handleInputChange}
                value={inputData.name}
              />
              {error.name && <div className="error">Enter Your Name</div>}
            </div>
            <div
              className={
                error.username ? "input-control error" : "input-control"
              }
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleInputChange}
                value={inputData.username}
              />
              {error.username && <div className="error">Enter a Username</div>}
            </div>
            <div
              className={error.email ? "input-control error" : "input-control"}
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={inputData.email}
              />
              {error.email && <div className="error">Enter Your Email</div>}
            </div>
            <div
              className={
                error.mobile_number ? "input-control error" : "input-control"
              }
            >
              <input
                type="text"
                name="mobile_number"
                id="mobile_number"
                placeholder="Mobile"
                onChange={handleInputChange}
                value={inputData.mobile_number}
              />
              {error.mobile_number && (
                <div className="error">Enter Your Mobile Number</div>
              )}
            </div>
            <div className="input-control">
              <span>
                {inputData.checkbox ? <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={handleInputChange}
                  checked
                />  : <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={handleInputChange}
              />}
                
                <p>Share my registration data with Superapp</p>
              </span>
              {error.checkbox && (
                <div className="error">
                  Check this box if you want to proceed
                </div>
              )}
            </div>
            <input type="submit" value="SIGN UP" className="submit-btn" />
          </form>
          <div className="signup-details">
            <span>
              By clicking on Sign up. you agree to Superapp{" "}
              <a href="">Terms and Conditions of Use</a>
            </span>
            <span>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <a href="">Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
