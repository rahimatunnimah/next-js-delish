import React, { useState, useEffect } from "react";
import homeStyle from "../styles/Home.module.css";
import NewRecipes from "../components/NewRecipes";
import PopularRecipes from "../components/PopularRecipes";
import Footer from "../components/Footer";
import Link from "next/link";
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

const home = (props) => {
  const [newRecipe] = useState(props.newRecipes)
  const [popularRecipe] = useState(props.popularRecipes)

  useEffect(() => {
    newRecipe,
    popularRecipe
  }, [])
  
  return (
    <>
    <div className="main">
      <div className="row justify-content-center">
        <div className="col-md-4"> 
          <div style={{minHeight:"90vh"}}>
            <div className={homeStyle.searchInput}>
              <input
                className="form-control form-control-lg mt-4"
                type="text"
                placeholder="Search Pasta, Bread, etc"
              />
              </div>
            <div className="row mt-4 mb-3">
              <h5>New Recipes</h5>
            </div>
            <div className="row">
              <NewRecipes data={newRecipe}/>
            </div>
            <div className="row my-4">
              <div className="col-8">
                <h5>Popular Recipes</h5> 
              </div>
              <div className="col-4 text-end">
                <div className={homeStyle.moreInfo}>
                  <Link href="/recipe/popular" passHref>
                    <p>More info</p> 
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <PopularRecipes data={popularRecipe}/>
            </div> 
          </div>   
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API

  const [newRecipeRes, popularRecipeRes] = await Promise.all([
    fetch(`http://localhost:8001/api/recipes/latest/recipe`),
    fetch(`http://localhost:8001/api/recipes/popular/recipe`)
  ]);

  const [newRecipes, popularRecipes] = await Promise.all([
    newRecipeRes.json(), 
    popularRecipeRes.json()
  ]);

  // Pass data to the page via props
  return { props: { newRecipes, popularRecipes } };
}

export default home;