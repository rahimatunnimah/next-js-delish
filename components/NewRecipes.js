import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import homeStyle from "../styles/Home.module.css";
import Link from "next/link";

const NewRecipes = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {props?.data?.result?.map((item, index) => {
            return (
              <Link key={index} href={`/recipe/detail/${item.id}`}>
                <div className={homeStyle.cardImage}>
                  <Image
                    src={item.recipe_image}
                    height={500}
                    width={500}
                    alt="img-recipe"
                  />
                  <div
                    className={`card-img-overlay ${homeStyle.titleCardRecipe}`}
                  >
                    <h5>{item.name}</h5>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default NewRecipes;
