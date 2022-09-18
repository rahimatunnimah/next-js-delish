import React, { useState, useEffect } from "react";
import recipeStyle from "../../styles/recipe.module.css";
import Footer from "../../components/Footer";
import ListRecipe from "../../components/ListRecipe";
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";
import axios from "axios";

const allRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [sort, setSort] = useState(false);
  const [asc, setAsc] = useState(false);
  const [desc, setDesc] = useState(false);

  useEffect(() => {
    if (sort == false) {
      setRecipes([]);
      getAllRecipe();
    } else if (sort == "asc") {
      setRecipes([]);
      getRecipeAsc();
    } else if (sort == "desc") {
      setRecipes([]);
      getRecipeDesc();
    }
  }, [sort]);

  const getAllRecipe = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recipes`)
      .then((res) => {
        setRecipes(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getRecipeAsc = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recipes/sort/name/asc`)
      .then((res) => {
        setRecipes(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecipeDesc = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recipes/sort/name/desc`)
      .then((res) => {
        setRecipes(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAsc = () => {
    setSort("asc");
    setAsc(true);
  };

  const onDesc = () => {
    setSort("desc");
    setAsc(false);
    setDesc(true);
  };

  const offSort = () => {
    setSort(false);
    setAsc(false);
    setDesc(false);
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div style={{ minHeight: "90vh" }}>
                <div className="row">
                  <div className={`col-6 ${recipeStyle.titlePage}`}>
                    <p className="text-center mt-3">All Recipe</p>
                  </div>
                  <div className="col-2 mt-2">
                    {asc ? (
                      <>
                        <TbSortAscendingLetters
                          className={`${recipeStyle.back} ${recipeStyle.sortActive} cursor`}
                          onClick={onDesc}
                        />
                      </>
                    ) : (
                      <>
                        {desc ? (
                          <>
                            <>
                              <TbSortDescendingLetters
                                className={`${recipeStyle.back} ${recipeStyle.sortActive} cursor`}
                                onClick={offSort}
                              />
                            </>
                          </>
                        ) : (
                          <>
                            <TbSortAscendingLetters
                              className={`${recipeStyle.back} cursor`}
                              onClick={onAsc}
                            />
                          </>
                        )}
                      </>
                    )}
                  </div>
                  {/* <div className="col-6">
                    <TbSortAscendingLetters size={30} />
                  </div> */}
                </div>
                <ListRecipe data={recipes} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default allRecipe;
