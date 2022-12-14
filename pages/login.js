import React, { useState } from "react";
import loginStyle from "../styles/login.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { FiUser, FiLock } from "react-icons/fi";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/authSlice";

const loginRequest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        dispatch(login({ token: res?.data?.token, user: res?.data?.user }));

        Swal.fire({
          icon: "success",
          text: "login successfully",
        }).then((result) => (result.isConfirmed ? router.replace("/") : null));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: err?.response?.data,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
                height="180px"
              />
            </div>
            <div className={loginStyle.loginTitle}>
              <h4 className="mt-3 text-center">Welcome !</h4>
              <p className="text-center">Log in to your exiting account.</p>
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <FiUser color="#C4C4C4" size={30} />
                  </span>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="example@gmail.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon1">
                    <FiLock color="#C4C4C4" size={30} />
                  </span>
                  <input
                    type="password"
                    className="form-control form-control-lg "
                    id="password"
                    placeholder="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className={loginStyle.forgotPassword}>
                  <p className="mt-2">Forgot password ?</p>
                </div> */}
                <div className={`d-grid gap-2 ${loginStyle.loginButton}`}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn btn-warning mt-2`}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                <div className={loginStyle.loginFooter}>
                  <p className="mt-3 text-center">
                    Don???t have an account ?{" "}
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

export default loginRequest;
