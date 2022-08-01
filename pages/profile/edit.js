import React from "react";
import profileStyle from "../../styles/profile.module.css";
import {IoIosArrowBack} from "react-icons/io";

const editProfile = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div style={{minHeight:"80vh"}}>
                        <div className="row mt-4">
                            <div className="col-4">
                                <div className={profileStyle.iconBack}>
                                    <IoIosArrowBack size={32}/>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className={profileStyle.titlePage}>
                                    <p>Edit Profile</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <p className={profileStyle.editProfile}>Change Photo Profile</p>
                        </div>
                        <hr className="mt-0"/>
                        <div className="row">
                            <p className={profileStyle.editProfile}>Change Password</p>
                        </div>
                        <hr className="mt-0"/>                     
                    </div>
                      <div className="d-grid">
                            <div className={`btn-group-vertical  ${profileStyle.buttonPhoto}`}>
                                <button type="button" className={`btn btn-light ${profileStyle.btnPhoto}`}>
                                    Photo Library
                                </button>
                                <button type="button" className={`btn btn-light mb-3 ${profileStyle.btnPhoto}`}>
                                    Take Photo
                                </button>
                            </div>
                        </div>
                        <div className="d-grid">
                            <div className={`d-grid mb-5 ${profileStyle.buttonCancel}`}>
                                <button type="button" className="btn btn-light">
                                    Cancel
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default editProfile;