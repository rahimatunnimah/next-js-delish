import React from "react";
import loginStyle from "../styles/login.module.css";
import Image from "next/image";
import Link from "next/link";

const login = () => {

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
              <form>
                <div className={loginStyle.loginForm}>
                  <input                  
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="example@gmail.com"
                  />
                 
                </div>
                <div className={loginStyle.loginForm}>
                  <input 
                    type="password"
                    className="form-control form-control-lg mt-3"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div className={loginStyle.forgotPassword}>
                  <p className="mt-2">Forgot password ?</p>
                </div>
                <div className={`d-grid gap-2 ${loginStyle.loginButton}`}>
                  <button
                    type="submit"
                    className={`btn btn-warning mt-2`}>
                    LOG IN
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