import React from "react";
import Image from "next/image";
import imageRecipe from "../public/images/Rectangle 5.png";
import homeStyle from "../styles/Home.module.css";
import {AiFillStar} from "react-icons/ai"

const PopularRecipes = () => {
    return (
        <>
        <div className="row">
            <div className="col-3 text-center">
                <div className={homeStyle.popularImage}> 
                <Image src={imageRecipe} alt="..."/>
                </div>
            </div>
            <div className="col-9">               
                <h6 className="mt-3">Sandwich with Egg</h6>
                <p className={homeStyle.rating}>
                    <AiFillStar color="#FFB200"/> 4.6
                </p>
            </div>
        </div>
          <div className="row">
            <div className="col-3 text-center">
                <div className={homeStyle.popularImage}> 
                <Image src={imageRecipe} alt="..."/>
                </div>
            </div>
            <div className="col-9">               
                <h6 className="mt-3">Sandwich with Egg</h6>
                <p className={homeStyle.rating}>
                    <AiFillStar color="#FFB200"/> 4.6
                </p>
            </div>
        </div>
          <div className="row">
            <div className="col-3 text-center">
                <div className={homeStyle.popularImage}> 
                <Image src={imageRecipe} alt="..."/>
                </div>
            </div>
            <div className="col-9">               
                <h6 className="mt-3">Sandwich with Egg</h6>
                <p className={homeStyle.rating}>
                    <AiFillStar color="#FFB200"/> 4.6
                </p>
            </div>
        </div>
        </>
    )
}

export default PopularRecipes;