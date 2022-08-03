import React from 'react';
import Image from "next/image";
import imageUser from "../../public/images/user.png";
import profileStyle from "../../styles/profile.module.css";
import {BiLike} from "react-icons/bi";
import {FiUser, FiBookmark, FiChevronRight, FiAward} from "react-icons/fi";
import Link from "next/link";
import Footer from "../../components/Footer";

const profile = () => {
  return (
    <>
      <div className="main">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className={`row align-items-center justify-content-center ${profileStyle.bgTop}`}>
              <div className="col-4 text-center">
                <Image src={imageUser}/>
                <p className={`mt-2 ${profileStyle.name}`}>Mareta Lopeda</p>
              </div>
            </div>
            <div className='container'>
              <div className={`row justify-content-center ${profileStyle.bgBottom}`}>
                  <div className='row mt-4'>
                    <div className='col-2 text-center'>
                      <div className={profileStyle.icon}>
                      <FiUser size={30}/>
                      </div>
                    </div>
                    <div className='col-8 mt-2'>
                      <p className={profileStyle.titleContent}>Edit Profile</p>
                    </div>
                    <div className={`col-2 ${profileStyle.link}`}>
                      <Link href="/user/edit" passHref>
                        <FiChevronRight/>
                      </Link>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col-2 text-center'>
                      <div className={profileStyle.icon}>
                      <FiAward size={30}/>
                      </div>
                    </div>
                    <div className='col-8 mt-2'>
                      <p className={profileStyle.titleContent}>My Recipe</p>
                    </div>
                    <div className={`col-2 ${profileStyle.link}`}>
                      <Link href="/user/my-recipe" passHref>
                        <FiChevronRight/>
                      </Link>
                    </div>
                  </div>    
                  <div className='row mt-4'>
                    <div className='col-2 text-center'>
                      <div className={profileStyle.icon}>
                      <FiBookmark size={30}/>
                      </div>
                    </div>
                    <div className='col-8 mt-2'>
                      <p className={profileStyle.titleContent}>Saved Recipe</p>
                    </div>
                    <div className={`col-2 ${profileStyle.link}`}>
                      <Link href="/user/saved-recipe" passHref>
                        <FiChevronRight/>
                      </Link>
                    </div>
                  </div>    
                  <div className='row mt-4'>
                    <div className='col-2 text-center'>
                      <div className={profileStyle.icon}>
                      <BiLike size={30}/>
                      </div>
                    </div>
                    <div className='col-8 mt-2'>
                      <p className={profileStyle.titleContent}>Liked Recipe</p>
                    </div>
                    <div className={`col-2 ${profileStyle.link}`}>
                      <Link href="/user/liked-recipe" passHref>
                        <FiChevronRight/>
                      </Link>
                    </div>
                  </div>          
              </div>
            </div>
          </div>
        </div> 
      </div>
      <Footer/>
    </>
  )
}

export default profile;
