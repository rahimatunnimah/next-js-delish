import React from "react";
import homeStyle from "../styles/Home.module.css";
import NewRecipes from "../components/NewRecipes";
import PopularRecipes from "../components/PopularRecipes";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

const home = () => {
  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4"> 
          <div style={{minHeight:"100vh"}}>
            <div className={homeStyle.searchInput}>
              <input
                className="form-control form-control-lg mt-4"
                type="text"
                placeholder="Search Pasta, Bread, etc"
              />
              </div>
            <div className="mt-5 mb-3">
              <h5>New Recipes</h5>
            </div>
            <div>
              <NewRecipes/>
            </div>
            <div className="my-4">
              <h5>Popular Recipes</h5>
            </div>
            <div>
              <PopularRecipes/>
            </div> 
          </div>
          <div className={homeStyle.footer}>            
            <Footer/>
          </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default home;