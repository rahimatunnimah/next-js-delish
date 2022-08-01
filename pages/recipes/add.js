import React from "react";
import addStyle from "../../styles/add.module.css";
import homeStyle from "../../styles/Home.module.css";
import Footer from "../../components/Footer";

const addRecipe = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 content">
                    <div style={{minHeight:"80vh"}}>
                        <div className={addStyle.titlePage}>
                            <p className="mt-5 text-center">Add Your Recipe</p>
                        </div>
                        <div>
                            <form>
                                <div className={addStyle.addForm}>
                                    <input                  
                                        type="text"
                                        className="form-control form-control-lg mt-4"
                                        id="name"
                                        placeholder="Title"
                                    />       
                                </div>
                                <div className={addStyle.formIngredients}>
                                    <input                  
                                        type="text"
                                        className="form-control form-ingredients mt-3"
                                        id="ingredients"
                                        placeholder="Ingredients"
                                    />       
                                </div>
                                <div className={addStyle.addForm}>
                                    <input                  
                                        type="text"
                                        className="form-control form-control-lg mt-3"
                                        id="video"
                                        placeholder="Add Video"
                                    />       
                                </div>
                                <div className={`d-grid gap-2 ${addStyle.addButton}`}>
                                    <button
                                        type="submit"
                                        className={`btn btn-warning mt-4 mb-3 ${addStyle.btnPost}`}>
                                        POST
                                    </button>
                                </div>
                            </form>
                        </div>           
                    </div>
                    <div className="d-grid">
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
                        <div className={`d-grid mb-5 ${addStyle.buttonCancel}`}>
                            <button type="button" className="btn btn-light">
                                Cancel
                            </button>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className={homeStyle.footer}>            
                    <Footer/>
                </div> 
            </div>
        </div>

        </>
    )
}

export default addRecipe;
