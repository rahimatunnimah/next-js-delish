import React from "react";
import Image from "next/image";
import homeStyle from "../styles/Home.module.css";
import Link from "next/link";

const ListRecipe = (props) => {
  return (
    <>
      {props?.data?.map((item, index) => {
        return (
          <Link href={`/recipe/detail/${item.id}`}>
            <div key={index} className="row mt-4 align-items-center cursor">
              <div className="col-3">
                <div className={homeStyle.popularImage}>
                  <Image
                    src={item.recipe_image}
                    height={500}
                    width={500}
                    alt="img-recipe"
                  />
                </div>
              </div>
              <div className="col-9">
                <div className={homeStyle.contentText}>
                  <h5>{item.name}</h5>
                  <p>{item.category_name}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ListRecipe;
