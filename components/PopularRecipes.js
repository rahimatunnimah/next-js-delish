import React, { useState } from "react";
import Image from "next/image";
import homeStyle from "../styles/Home.module.css";
import {AiFillStar} from "react-icons/ai";
import Link from "next/link";

const PopularRecipes = (props) => {

    return (
        <>
        {props?.data?.result?.map((item, index) => {
            return (
            <Link href={`/recipe/detail/${item.recipe_id}`}>
                <div className="row cursor">
                <div className="col-3 text-center">
                    <div key={index} className={homeStyle.popularImage}> 
                    <Image src={`http://localhost:8001/${item.recipe_image.substring(
                    7,
                    item.recipe_image.length
                  )}`} height={500} width={500} alt="img-recipe" />
                    </div>
                </div>
                <div className="col-9 px-0">               
                    <h6 className="mt-3">{item.name}</h6>
                    <p className={homeStyle.rating}>
                        <AiFillStar color="#FFB200"/> 4.6 <span>{item.category_name}</span>
                    </p>
                </div>
            </div>
            </Link>    
            
            )
        })}
        </>
    )
}

export default PopularRecipes;