import React from "react";
import Image from "next/image";
import imageRecipe from "../../public/images/Rectangle 5.png";
import homeStyle from "../../styles/Home.module.css";
import {BiLike} from "react-icons/bi";
import {FiBookmark, FiPlay} from "react-icons/fi";
import {IoMdArrowBack} from "react-icons/io";
import detailStyle from "../../styles/detail.module.css";

const detailRecipe = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className={detailStyle.detailContent}>
                        <div className={detailStyle.iconBack}>
					        <IoMdArrowBack size={30} color="#F5F5F5" />
				        </div>
                        <div className={detailStyle.imageContent}>
    
					    <div className="row">
						    <div className="col-8">
							    <h3>Sandwich with Egg</h3>
							    <p>By Chef Ronald Humson</p>
						    </div>
						    <div className="col-4 p-0">
							    <div className={detailStyle.buttonControl}>
								    <button type="button" className="btn btn-warning">
									    <FiBookmark size={20} />
								    </button>
								    <button type="button" className="btn btn-warning">
									    <BiLike size={20} />
								    </button>
							    </div>
						    </div>
					    </div>
				        </div>
                        <div>
                            <nav class="nav">
                                <a class="nav-link active" aria-current="page" href="#">Active</a>
                                <a class="nav-link" href="#">Link</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default detailRecipe;
