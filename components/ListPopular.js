import React from "react";
// import { BiLike } from "react-icons/bi";
// import { FiBookmark } from "react-icons/fi";
import popularStyle from "../styles//popular.module.css";
import Image from "next/image";
import homeStyle from "../styles/Home.module.css";
import Link from "next/link";

const ListPopular = (props) => {
  return (
    <>
      {props?.data?.map((item, index) => {
        return (
          <Link href={`/recipe/detail/${item.recipe_id}`}>
            <div key={index} className="row cursor">
              <div className="col-3 mb-3 text-center">
                <div className={homeStyle.popularImage}>
                  <Image
                    src={item?.recipe_image}
                    height={500}
                    width={500}
                    alt="img-recipe"
                  />
                </div>
              </div>
              <div className="col-5 px-0">
                <div className={popularStyle.contentText}>
                  <h6 className="mt-2">{item.name}</h6>
                  <p>{item.category_name}</p>
                </div>
              </div>
              {/* <div className="col-2">
                <div className={popularStyle.buttonBookmark}>
                  <button
                    type="button"
                    className={`btn btn-warning mt-2 ${popularStyle.button}`}
                  >
                    <FiBookmark size={25} />
                  </button>
                </div>
              </div>
              <div className="col-2">
                <div className={popularStyle.buttonLike}>
                  <button
                    type="button"
                    className={`btn btn-warning mt-2 ${popularStyle.button}`}
                  >
                    <BiLike size={25} />
                  </button>
                </div>
              </div> */}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ListPopular;
