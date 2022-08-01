import React from "react";
import homeStyle from "../styles/Home.module.css";
import { FiHome } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <>
       <div className={`row justify-content-center`}>
            <div className="col-3">
                <FiHome size={25}/>
            </div>
            <div className="col-3">
                <MdOutlineAddBox size={27}/>
            </div>
            <div className="col-3">
                <BsChat size={25}/>
            </div>
            <div className="col-3">
                <FiUser size={25}/>
            </div>
        </div>     
     
    </>
    
  );
};

export default Footer;


