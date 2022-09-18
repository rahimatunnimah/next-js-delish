import React, { useState, useEffect } from "react";
import Image from "next/image";
import homeStyle from "../../../styles/Home.module.css";
import Footer from "../../../components/Footer";
import { AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/router";
import imgNoResult from "../../../public/images/no-result.png";

const SearchRecipes = () => {
  const [search, setSearch] = useState("");
  const [listRecipe, setListRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/recipes/search/name?name=${name}`
      )
      .then((res) => {
        setListRecipe(res?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/recipe/search/${search}`);
  };

  return (
    <>
      <div className="container main">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div style={{ minHeight: "90vh" }}>
              <div className={homeStyle.searchInput}>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mt-4">
                    <span className="input-group-text" id="basic-addon1">
                      <FiSearch color="#C4C4C4" size={30} />
                    </span>
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Search Pasta, Bread, etc"
                      onChange={(e) => setSearch(e?.target?.value)}
                    />
                  </div>
                </form>
              </div>
              {isLoading ? (
                <>
                  <div
                    className="row align-items-center text-center"
                    style={{ minHeight: "80vh" }}
                  >
                    <h1>
                      <div
                        className="spinner-border text-warning"
                        style={{ width: "60px", height: "60px" }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </h1>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  {listRecipe.length !== 0 ? (
                    <>
                      {listRecipe?.map((item, index) => (
                        <div key={index} className="row mt-3">
                          <div className="col-3 text-center">
                            <div className={homeStyle.popularImage}>
                              <Image
                                src={item?.recipe_image}
                                height={500}
                                width={500}
                                alt="img-recipe"
                              />
                            </div>
                          </div>
                          <div className="col-9 px-0">
                            <h6 className="mt-3">{item.name}</h6>
                            <p className={homeStyle.rating}>
                              <AiFillStar color="#FFB200" /> 4.6{" "}
                              <span>{item.category_name}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <Image
                        className="mt-4"
                        src={imgNoResult}
                        height={500}
                        width={500}
                        alt="img-recipe"
                      />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchRecipes;
