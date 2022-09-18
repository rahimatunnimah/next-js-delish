import React, { useState, useEffect } from "react";
import popularStyle from "../../styles/popular.module.css";
import Image from "next/image";
import homeStyle from "../../styles/Home.module.css";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";

const myRecipe = () => {
  const [myRecipe, setMyRecipe] = useState([]);
  const { auth } = useSelector((state) => state);
  const { user } = auth;

  useEffect(() => {
    getMyRecipe();
  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
    },
  };

  const getMyRecipe = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/recipes/user/${user?.id}`,
        config
      )
      .then((res) => {
        const dataRecipe = res?.data?.data;
        setMyRecipe(dataRecipe);
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
            {myRecipe?.map((item, index) => {
              return (
                <Link href={`/recipe/detail/${item.id}`}>
                  <div
                    key={index}
                    className="row mt-4 align-items-center cursor"
                  >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default myRecipe;
