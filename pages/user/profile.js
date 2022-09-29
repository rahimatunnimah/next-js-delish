import React, { useState, useEffect } from "react";
import Image from "next/image";
import profileStyle from "../../styles/profile.module.css";
import { BiLike } from "react-icons/bi";
import { FiUser, FiBookmark, FiChevronRight, FiAward } from "react-icons/fi";
import Link from "next/link";
import Footer from "../../components/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

const profile = () => {
  const [profile, setProfile] = useState([]);
  const { auth } = useSelector((state) => state);
  const { user } = auth;
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    getProfile();
  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  };

  const getProfile = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/users/${user?.id}`, config)
      .then((res) => {
        // console.log(res);
        setProfile(res?.data?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    dispatch(logout());
    Swal.fire({
      icon: "success",
      text: "You have logged out",
    }).then((result) => (result.isConfirmed ? router.push("/") : null));
  };

  return (
    <>
      <div className="main">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              className={`row align-items-center justify-content-center ${profileStyle.bgTop}`}
            >
              <div className={`col-4 text-center ${profileStyle.profile}`}>
                <Image src={profile.image} height={100} width={100} />
                <p className="mt-2">{profile.username}</p>
              </div>
            </div>
            <div className="container">
              <div
                className={`row justify-content-center ${profileStyle.bgBottom}`}
              >
                <Link href="/user/edit" passHref>
                  <div className={`row mt-4 cursor ${profileStyle.rowEdit}`}>
                    <div className="col-2 text-center">
                      <div className={profileStyle.icon}>
                        <FiUser size={30} />
                      </div>
                    </div>
                    <div className="col-8 mt-2">
                      <p className={profileStyle.titleContent}>Edit Profile</p>
                    </div>
                    <div className={`col-2 ${profileStyle.link}`}>
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link href="/user/my-recipe" passHref>
                  <div className="row cursor">
                    <div className="col-2 text-center">
                      <div className={profileStyle.icon}>
                        <FiAward size={30} />
                      </div>
                    </div>
                    <div className="col-8 mt-2">
                      <p className={profileStyle.titleContent}>My Recipe</p>
                    </div>
                    <div className={`col-2 ${profileStyle.link}`}>
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                {/* <Link href="/user/saved-recipe" passHref>
                  <div className="row mt-4 cursor">
                    <div className="col-2 text-center">
                      <div className={profileStyle.icon}>
                        <FiBookmark size={30} />
                      </div>
                    </div>
                    <div className="col-8 mt-2">
                      <p className={profileStyle.titleContent}>Saved Recipe</p>
                    </div>
                    <div className={`col-2 ${profileStyle.link}`}>
                      <FiChevronRight />
                    </div>
                  </div>
                </Link>
                <Link href="/user/liked-recipe" passHref>
                  <div className="row mt-4 cursor">
                    <div className="col-2 text-center">
                      <div className={profileStyle.icon}>
                        <BiLike size={30} />
                      </div>
                    </div>
                    <div className="col-8 mt-2">
                      <p className={profileStyle.titleContent}>Liked Recipe</p>
                    </div>
                    <div className={`col-2 ${profileStyle.link}`}>
                      <FiChevronRight />
                    </div>
                  </div>
                </Link> */}
                <div className={`d-grid gap-2 ${profileStyle.btnLogout}`}>
                  <button
                    type="submit"
                    className={`btn btn-warning mt-2`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer data={auth?.token} />
    </>
  );
};

export default profile;
