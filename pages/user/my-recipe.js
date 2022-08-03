import React from "react";
import popularStyle from "../../styles/popular.module.css";
import Image from "next/image";
import imageRecipe from "../../public/images/Rectangle 5.png";
import homeStyle from "../../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const myRecipe = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="row mt-4">
                <div className="col-4">
                    <div className={popularStyle.iconBack}>
                    <Link href="/user/profile" passHref>
                        <IoIosArrowBack size={32} />
                    </Link>
                    </div>
                </div>
                <div className="col-8">
                    <div className={popularStyle.titlePage}>
                    <p>My Recipe</p>
                    </div>
                </div>
                </div>
                <div className="row mt-4 align-items-center">
                <div className="col-3">
                    <div className={homeStyle.popularImage}>
                    <Image src={imageRecipe} alt="img-recipe" />
                    </div>
                </div>
                <div className="col-9">
                    <div className={homeStyle.contentText}>
                    <h5>Margherita</h5>
                    <p>In Veg Pizza</p>
                    </div>
                </div>
                </div>
                  <div className="row mt-4 align-items-center">
                <div className="col-3">
                    <div className={homeStyle.popularImage}>
                    <Image src={imageRecipe} alt="img-recipe" />
                    </div>
                </div>
                <div className="col-9">
                    <div className={homeStyle.contentText}>
                    <h5>Margherita</h5>
                    <p>In Veg Pizza</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
        </>
    )
}

export default myRecipe;