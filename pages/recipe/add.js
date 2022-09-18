import React, { useState, useEffect } from "react";
import addStyle from "../../styles/add.module.css";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const addRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState([]);
  const [idCategory, setIdCategory] = useState(1);
  const [recipeImage, setRecipeImage] = useState(null);
  const { auth } = useSelector((state) => state);
  const { user } = auth;
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recipes/category`)
      .then((res) => {
        setCategory(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const config = {
    headers: {
      Authorization: `Bearer ${auth?.token}`,
      "Content-Type": "multipart/form-data; ",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("ingredients", ingredients);
    formData.append("category_id", idCategory);
    formData.append("recipe_image", recipeImage);
    formData.append("user_id", user?.id);

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/recipes/add`, formData, config)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          text: "Add data recipe successfully",
        }).then((result) => (result.isConfirmed ? router.push("/") : null));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <div className="main">
        <div className="row justify-content-center">
          <div className="col-md-4 content">
            <div className={addStyle.titlePage}>
              <p className="mt-4 text-center">Add Your Recipe</p>
            </div>
            <form>
              <div className={addStyle.addForm}>
                <input
                  type="text"
                  className="form-control shadow-none mt-4"
                  id="name"
                  placeholder="Title"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={addStyle.formIngredients}>
                <textarea
                  type="text"
                  className="form-control shadow-none form-ingredients mt-3"
                  id="ingredients"
                  placeholder="Ingredients"
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </div>
              <div className={addStyle.formCategory}>
                <div className="row form-floating mt-3">
                  <select
                    className="form-select shadow-none"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    onChange={(e) => setIdCategory(e.target.value)}
                  >
                    {category.map((item, index) => (
                      <option key={index} value={item?.id}>
                        {item?.category_name}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelect">Category</label>
                </div>
              </div>

              <div className={addStyle.addForm}>
                <input
                  type="file"
                  className="form-control mt-3"
                  id="video"
                  onChange={(e) => setRecipeImage(e.target.files[0])}
                />
              </div>
              <div className={`d-grid gap-2 ${addStyle.addButton}`}>
                <button
                  type="submit"
                  className={`btn btn-warning mt-4 mb-3`}
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "POST"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer data={auth?.token} />
    </>
  );
};

export default addRecipe;
