import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import imageRecipe from "../public/images/beef steak.jpg";
import homeStyle from "../styles/Home.module.css";

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
              <div key={index} className={homeStyle.cardImage}>
                <Image src={`http://localhost:8001/${item.recipe_image.substring(
                    7,
                    item.recipe_image.length
                  )}`} height={500} width={500} alt="img-recipe" />
                <div className="card-img-overlay">
                  <h5 className={`card-title ${homeStyle.titleCardRecipe}`}>
                    {item.name}
                  </h5>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  );
};

export default NewRecipes;
