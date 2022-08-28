import React, { useState, useEffect } from "react";
import popularStyle from "../../styles/popular.module.css";
import Image from "next/image";
import homeStyle from "../../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";

const popularList = () => {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    getPopularList();
  }, []);

  const getPopularList = () => {
    axios
      .get(`http://localhost:8001/api/recipes/popular/list`)
      .then((res) => {
        const dataPopular = res?.data?.result;
        setPopularList(dataPopular);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="row mt-4">
              <div className="col-4">
                <div className={popularStyle.iconBack}>
                  <Link href="/" passHref>
                    <IoIosArrowBack size={32} />
                  </Link>
                </div>
              </div>
              <div className="col-8 mb-4">
                <div className={popularStyle.titlePage}>
                  <p>Popular Menu</p>
                </div>
              </div>
            </div>
            {popularList?.map((item, index) => {
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
                    <div className="col-2">
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
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default popularList;
