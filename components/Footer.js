import React from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import homeStyle from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Footer = (props) => {
  const router = useRouter();

  const handleRoute = () => {
    if (!props?.data) {
      Swal.fire({
        icon: "error",
        text: "You must login",
      }).then((result) => (result.isConfirmed ? router.push("/login") : null));
    } else {
      router.push(`/user/profile`);
    }
  };
  return (
        <div
      className={`row align-items-center justify-content-center ${homeStyle.footer}`}
    >
      <div className="col-md-4">
        <div className={`row justify-content-center`}>
          <div className="col-3">
            <Link href="/" passHref>
              <FiHome size={25}/>
            </Link>
          </div>
          <div className="col-3">
            <Link href="/recipe/add" passHref>
                <MdOutlineAddBox size={27}/>
            </Link>
          </div>
          <div className="col-3">
            <BsChat size={25}/>
          </div>
          <div className="col-3"> 
            <div onClick={handleRoute}>
                <FiUser size={25}/>
              </div>                                        
          </div>
        </div>
      </div>
    </div>       
  );
};

export default Footer;


