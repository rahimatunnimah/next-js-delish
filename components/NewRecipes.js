import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import imageRecipe from "../public/images/beef steak.jpg";
import homeStyle from "../styles/Home.module.css";

const NewRecipes = () => {
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
          <div className={homeStyle.cardImage}>
            <Image src={imageRecipe} alt="img-recipe" />
            <div className="card-img-overlay">
              <h5 className={`card-title ${homeStyle.titleCardRecipe}`}>
                Beef Steak
              </h5>
            </div>
          </div>
          <div className={homeStyle.cardImage}>
            <Image src={imageRecipe} alt="img-recipe" />
            <div className="card-img-overlay">
              <h5 className={`card-title ${homeStyle.titleCardRecipe}`}>
                Beef Steak
              </h5>
            </div>
          </div>
          <div className={homeStyle.cardImage}>
            <Image src={imageRecipe} alt="img-recipe" />
            <div className="card-img-overlay">
              <h5 className={`card-title ${homeStyle.titleCardRecipe}`}>
                Beef Steak
              </h5>
            </div>
          </div>
           <div className={homeStyle.cardImage}>
            <Image src={imageRecipe} alt="img-recipe" />
            <div className="card-img-overlay">
              <h5 className={`card-title ${homeStyle.titleCardRecipe}`}>
                Beef Steak
              </h5>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default NewRecipes;
