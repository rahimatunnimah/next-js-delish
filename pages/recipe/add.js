import React, { useState, useEffect } from "react";
import addStyle from "../../styles/add.module.css";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

const addRecipe = () => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [category, setCategory] = useState([]);
    const [recipeImage, setRecipeImage] = useState(null);
    const [tokenStorage, setTokenStorage] = useState({});
    const router = useRouter()

    useEffect(() => {
        setTokenStorage(localStorage?.getItem("token"))
    }, [])

    const config = {
        headers: {
            Authorization: `Bearer ${tokenStorage}`,
            "Content-Type": "multipart/form-data; ",
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("ingredients", ingredients);
        formData.append("category_name", category);
        formData.append("recipe_image", recipeImage);
        
        axios
            .post(`http://localhost:8001/api/recipes/add`, formData, config)
            .then((res) => {
                console.log(res)
                Swal.fire({
                icon: "success",
                text: "Add data recipe successfully",
                }).then((result) => (result.isConfirmed ? router.push("/") : null));
            })
            .catch((err) => {
                console.log(err);
            });
    }
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
                                    className="form-control form-control-lg mt-4"
                                    id="name"
                                    placeholder="Title"
                                    onChange={(e) => setName(e.target.value)}
                                />       
                            </div>
                            <div className={addStyle.formIngredients}>
                                <textarea                  
                                    type="text"
                                    className="form-control form-ingredients mt-3"
                                    id="ingredients"
                                    placeholder="Ingredients"
                                    onChange={(e) => setIngredients(e.target.value)}
                                />       
                            </div>
                            <div class="form-group mt-3">
                                <select class="form-control" id="sel1" onChange={(e) => setCategory(e.target.value)}>
                                    <option value={1}>Category Heavy meal</option>
                                    <option value={2}>Category Vegetarian</option>
                                    <option value={3}>Category Dessert</option>
                                    <option value={4}>Category Drink</option>
                                </select>
                            </div>
                          
                            <div className={addStyle.addForm}>
                                <input                  
                                    type="file"
                                    className="form-control form-control-lg mt-3"
                                    id="video"
                                    onChange={(e) => setRecipeImage(e.target.files[0])}
                                    
                                />   
                            </div>
                            <div className={`d-grid gap-2 ${addStyle.addButton}`}>
                                <button
                                    type="submit"
                                    className={`btn btn-warning mt-4 mb-3`}
                                    onClick={handleSubmit}>
                                    POST
                                </button>
                            </div>
                        </form>          
                    {/* <div className="d-grid">
                        <div className={`btn-group-vertical  ${addStyle.buttonVideo}`}>
                            <button type="button" className={`btn btn-light ${addStyle.btnVideo}`}>
                                Library
                            </button>
                            <button type="button" className={`btn btn-light mb-3 ${addStyle.btnVideo}`}>
                                Take Video
                            </button>
                        </div>
                    </div>
                    <div className="d-grid">
                        <div className={`d-grid mb-3 ${addStyle.buttonCancel}`}>
                            <button type="button" className="btn btn-light">
                                Cancel
                            </button>
                        </div>
                    </div>                   */}
                </div>
            </div>
         </div>
            <Footer data={tokenStorage}/> 
        </>      
    )
}

export default addRecipe;
