import React from "react";
import registerStyle from "../styles/register.module.css";
import Link from "next/link";

const register = () => {

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
              <form>
                <div className={registerStyle.registerForm}>
                  <input                  
                    type="text"
                    className="form-control form-control-lg mt-5"
                    id="username"
                    placeholder="Name"
                  />       
                </div>
                <div className={registerStyle.registerForm}>
                  <input                  
                    type="email"
                    className="form-control form-control-lg mt-3"
                    id="email"
                    placeholder="E-mail"
                  />       
                </div>
                 <div className={registerStyle.registerForm}>
                  <input                  
                    type="number"
                    className="form-control form-control-lg mt-3"
                    id="number"
                    placeholder="Phone Number"
                  />       
                </div>
                <div className={registerStyle.registerForm}>
                  <input 
                    type="password"
                    className="form-control form-control-lg mt-3"
                    id="password1"
                    placeholder=" Create New Password"
                  />
                </div>
                 <div className={registerStyle.registerForm}>
                  <input 
                    type="password"
                    className="form-control form-control-lg mt-3"
                    id="password2"
                    placeholder="Confirm New Password"
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