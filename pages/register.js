import React, { useState } from "react";
import registerStyle from "../styles/register.module.css";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";



const register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const handleRegister = () => {
    setIsLoading(true)
   
    if(password !== confirmPassword) {
      Swal.fire({
          icon: "error",
          text: "pasword and confirm password does not match",
        })
    } else {
      axios.post(`http://localhost:8001/api/auth/register`,
      {username,
      email,
      phone,
      password}
     ).then((res) => {
       Swal.fire({
          icon: "success",
          text: "register successfully",
        }).then((result) => (result.isConfirmed ? router.replace("/login") : null));
     }).catch((err)=> {
      console.log(err)
      Swal.fire({
          icon: "error",
          text: "register successfully",
        })
     }).finally(() => {
      setIsLoading(false)
    })    
    }

  }
  
  return (
   <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 content">
            <div className={registerStyle.registerTitle}>
              <h4 className="mt-5 text-center">Let’s Get Started !</h4>
              <p className="text-center">Create new account to access all features</p>            
            </div>
            <div>
              <form onSubmit={(e) => {
                e.preventDefault()
                handleRegister()
              }}>
                <div className={registerStyle.registerForm}>
                  <input                  
                    type="text"
                    className="form-control form-control-lg mt-5"
                    id="username"
                    placeholder="Name"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />       
                </div>
                <div className={registerStyle.registerForm}>
                  <input                  
                    type="email"
                    className="form-control form-control-lg mt-3"
                    id="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />       
                </div>
                 <div className={registerStyle.registerForm}>
                  <input                  
                    type="number"
                    className="form-control form-control-lg mt-3"
                    id="number"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />       
                </div>
                <div className={registerStyle.registerForm}>
                  <input 
                    type="password"
                    className="form-control form-control-lg mt-3"
                    id="password1"
                    placeholder=" Create New Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                 <div className={registerStyle.registerForm}>
                  <input 
                    type="password"
                    className="form-control form-control-lg mt-3"
                    id="password2"
                    placeholder="Confirm New Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className={`d-grid gap-2 ${registerStyle.registerButton}`}>
                  <button
                    type="submit"
                    className={`btn btn-warning mt-3`}>
                    CREATE
                  </button>
                </div>
                <div className={registerStyle.registerFooter}>
                  <p className="mt-3 text-center">
                    Already have account ?{" "}
                    <Link href="/login" passHref>
                      <a>Log in here</a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </>

  );
};

export default register;