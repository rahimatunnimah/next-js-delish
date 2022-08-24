import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageUser from "../../public/images/user.png";
import profileStyle from "../../styles/profile.module.css";
import { BiLike } from "react-icons/bi";
import { FiUser, FiBookmark, FiChevronRight, FiAward } from "react-icons/fi";
import Link from "next/link";
import Footer from "../../components/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const profile = () => {
  const [profile, setProfile] = useState([]);
  const [userStorage, setUserStorage] = useState({});
  const [tokenStorage, setTokenStorage] = useState({});
  const router = useRouter();

  useEffect(() => {
    setUserStorage(JSON.parse(localStorage?.getItem("user")));
    setTokenStorage(localStorage?.getItem("token"));
    getProfile();
  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${tokenStorage}`,
    },
  };

  const getProfile = () => {
    axios
      .get(`http://localhost:8001/api/users/${userStorage?.id}`, config)
      .then((res) => {
        setProfile(res?.data?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
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
              <div className="col-4 text-center">
                <Image src={imageUser} />
                <p className={`mt-2 ${profileStyle.name}`}>
                  {profile.username}
                </p>
              </div>
            </div>
            <div className="container">
              <div
                className={`row justify-content-center ${profileStyle.bgBottom}`}
              >
                <Link href="/user/edit" passHref>
                  <div className="row mt-4 cursor">
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
                  <div className="row mt-4 cursor">
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
                <Link href="/user/saved-recipe" passHref>
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
                </Link>
                <div className={`d-grid gap-2`}>
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
      <Footer data={tokenStorage} />
    </>
  );
};

export default profile;
