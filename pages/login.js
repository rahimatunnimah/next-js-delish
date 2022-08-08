import React, { useState } from "react";
import loginStyle from "../styles/login.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";


const login = () => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const handleLogin = () => {
    setIsLoading(true)
    axios.post(`http://localhost:8001/api/auth/login`, {
      email,
      password
    })
    .then((res) => {

      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("user", JSON.stringify(res?.data?.user));  

      Swal.fire({
          icon: "success",
          text: "login successfully",
        }).then((result) => (result.isConfirmed ? router.replace("/") : null));
    })
    .catch((err) => {
      Swal.fire({
          icon: "error",
          text: err?.response?.data,
        })
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="mt-5 text-center">
              <Image
                src="/images/user.png"
                alt="logo"
                width="180px"
                height="180px"/>
            </div>
            <div className={loginStyle.loginTitle}>
              <h4 className="mt-3 text-center">Welcome !</h4>
              <p className="text-center">Log in to your exiting account.</p>            
            </div>
            <div>
              <form onSubmit={(e)=> {
                e.preventDefault()
                handleLogin()
              }}>
                <div className={loginStyle.loginForm}>
                  <input                  
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="example@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                 
                </div>
                <div className={loginStyle.loginForm}>
                  <input 
                    type="password"
                    className="form-control form-control-lg mt-3"
                    id="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={loginStyle.forgotPassword}>
                  <p className="mt-2">Forgot password ?</p>
                </div>
                <div className={`d-grid gap-2 ${loginStyle.loginButton}`}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn btn-warning mt-2`}>
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                <div className={loginStyle.loginFooter}>
                  <p className="mt-3 text-center">
                    Don’t have an account ?{" "}
                    <Link href="/register" passHref>
                      <a>Sign Up</a>
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

export default login;