import React, { useState, useEffect } from "react";
import profileStyle from "../../styles/profile.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineAddAPhoto } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

const editProfile = () => {
  const [profile, setProfile] = useState([]);
  const [titleImage, setTitleImage] = useState("Edit Profile Image");
  const [image, setImage] = useState({});
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState();
  const [username, setUsername] = useState("");
  const { auth } = useSelector((state) => state);
  const { user } = auth;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getProfile();
  }, []);

  const configProfile = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  };

  const getProfile = () => {
    const idUser = user?.id;
    if (idUser) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${idUser}`,
          configProfile
        )
        .then((res) => {
          setProfile(res?.data?.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    let uploadedImage = e.target.files[0];
    let nameImage = e.target?.files[0]?.name;
    setTitleImage(nameImage);
    setImage(uploadedImage);
  };

  const handleUploadProfile = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("id", user?.id);
    formData.append("image", image);

    const config = {
      headers: {
        Authorization: `Bearer ${auth?.token}`,
        "Content-Type": "multipart/form-data; ",
      },
    };

    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/edit/photo`,
        formData,
        config
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: "Edit Profile Success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: `${err?.response?.data}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/edit`,
        {
          id: user?.id,
          username,
          email,
          password,
          phone,
        },
        configProfile
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: res?.data,
        }).then((result) =>
          result.isConfirmed ? router.push("/user/profile") : null
        );
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: `${err?.response?.data}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log(user?.id);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div style={{ minHeight: "80vh" }}>
              <div className="row mt-4">
                <div className="col-4">
                  <div className={profileStyle.iconBack}>
                    <Link href="/user/profile" passHref>
                      <IoIosArrowBack size={32} />
                    </Link>
                  </div>
                </div>
                <div className="col-8">
                  <div className={profileStyle.titlePage}>
                    <p>Edit Profile</p>
                  </div>
                </div>
              </div>
              <div className={`row mt-4 ${profileStyle.textProfileBtm}`}>
                <p>Photo</p>
              </div>
              <form onSubmit={handleUploadProfile}>
                <div className="row mx-3">
                  <input
                    type="file"
                    id="upload"
                    hidden
                    onChange={handleUpload}
                  />
                  <label className={profileStyle.labelUpload} for="upload">
                    <div className={profileStyle.iconUpload}>
                      <MdOutlineAddAPhoto size={20} color="#eec302" />
                      <p>{titleImage}</p>
                    </div>
                  </label>
                </div>
                <div
                  className={`d-grid gap-2 my-4 px-3 d-md-flex justify-content-end ${profileStyle.btnSave}`}
                >
                  <button className="btn" type="submit">
                    Save
                  </button>
                </div>
              </form>
              <div className={`row mt-3 ${profileStyle.textProfileBtm}`}>
                <p>Profile</p>
              </div>
              <form>
                <div className={profileStyle.formInput}>
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-2"
                  >
                    Username
                  </label>
                  <input
                    className="form-control form-control-sm shadow-none py-0"
                    type="text"
                    placeholder={profile?.username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className={profileStyle.formInput}>
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-2"
                  >
                    Email
                  </label>
                  <input
                    className="form-control form-control-sm shadow-none py-0"
                    type="email"
                    placeholder={profile?.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={profileStyle.formInput}>
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-2"
                  >
                    Password
                  </label>
                  <input
                    className="form-control form-control-sm shadow-none py-0"
                    type="password"
                    placeholder="........"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className={profileStyle.formInput}>
                  <label
                    for="exampleFormControlInput1"
                    className="form-label mt-2"
                  >
                    Phone Number
                  </label>
                  <input
                    className="form-control form-control-sm shadow-none py-0"
                    type="text"
                    placeholder={profile?.phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div
                  className={`d-grid gap-2 my-4 px-3 d-md-flex justify-content-end ${profileStyle.btnSave}`}
                >
                  <button
                    className="btn"
                    type="submit"
                    onClick={handleUpdateProfile}
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading" : "Edit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default editProfile;
