import React from "react";
import Image from "next/image";
import imageRecipe from "../public/images/Rectangle 5.png";
import homeStyle from "../styles/Home.module.css";
import {AiFillStar} from "react-icons/ai"

const PopularRecipes = (props) => {
    return (
        <>
        {props?.data?.result?.map((item, index) => {
            return (
            <div className="row">
                <div className="col-3 text-center">
                    <div className={homeStyle.popularImage}> 
                    <Image src={`http://localhost:8001/${item.recipe_image.substring(
                    7,
                    item.recipe_image.length
                  )}`} height={500} width={500} alt="img-recipe" />
                    </div>
                </div>
                <div className="col-9">               
                    <h6 className="mt-3">{item.name}</h6>
                    <p className={homeStyle.rating}>
                        <AiFillStar color="#FFB200"/> 4.6 <span>{item.category_name}</span>
                    </p>
                </div>
            </div>
            )
        })}
        </>
    )
}

export default PopularRecipes;