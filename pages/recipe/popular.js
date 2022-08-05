import React from "react";
import popularStyle from "../../styles/popular.module.css";
import Image from "next/image";
import imageRecipe from "../../public/images/Rectangle 5.png";
import homeStyle from "../../styles/Home.module.css";
import {IoIosArrowBack} from "react-icons/io";
import {BiLike} from "react-icons/bi";
import {FiBookmark} from "react-icons/fi";
import Link from "next/link";

const popularList = () => {
    return (
      <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="row mt-4">
                        <div className="col-4">
                            <div className={popularStyle.iconBack}>
                                <Link href="/" passHref>
                                  <IoIosArrowBack size={32}/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className={popularStyle.titlePage}>
                                <p>Popular Menu</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3 text-center">
                        <div className={homeStyle.popularImage}> 
                            <Image src={imageRecipe} alt="img-recipe"/>
                        </div>
                        </div>
                        <div className="col-5">
                          <div className={popularStyle.contentText}>
                            <h5 className="mt-2">Margherita</h5>
                            <p>In Veg Pizza</p>
                          </div>
                        </div>
                        <div className="col-2">
                            <div className={popularStyle.buttonBookmark}>
                              <button type="button" className={`btn btn-warning mt-2 ${popularStyle.button}`}>
                                <FiBookmark size={25} />
                              </button>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className={popularStyle.buttonLike}>
                                <button type="button" className={`btn btn-warning mt-2 ${popularStyle.button}`}>
                                  <BiLike size={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3 text-center">
                        <div className={homeStyle.popularImage}> 
                            <Image src={imageRecipe} alt="img-recipe"/>
                        </div>
                        </div>
                        <div className="col-5">
                          <div className={popularStyle.contentText}>
                            <h5 className="mt-2">Margherita</h5>
                            <p>In Veg Pizza</p>
                          </div>
                        </div>
                        <div className="col-2">
                            <div className={popularStyle.buttonBookmark}>
                              <button type="button" className={`btn btn-warning mt-2 ${popularStyle.button}`}>
                                <FiBookmark size={25} />
                              </button>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className={popularStyle.buttonLike}>
                                <button type="button" className={`btn btn-warning mt-2 ${popularStyle.button}`}>
                                  <BiLike size={25} />
                                </button>
                            </div>
                        </div>
                    </div>  
                    <div className="row mt-4">
                        <div className="col-3 text-center">
                        <div className={homeStyle.popularImage}> 
                            <Image src={imageRecipe} alt="img-recipe"/>
                        </div>
                        </div>
                        <div className="col-5">
                          <div className={popularStyle.contentText}>
                            <h5 className="mt-2">Margherita</h5>
                            <p>In Veg Pizza</p>
                          </div>
                        </div>
                        <div className="col-2">
                            <div className={popularStyle.buttonBookmark}>
                            <button type="button" className={`btn btn-warning mt-2 ${popularStyle.button}`}>
                              <FiBookmark size={25} />
                            </button>
                          </div>
                        </div>
                        <div className="col-2">
                            <div className={popularStyle.buttonLike}>
                                <button type="button" className={`btn btn-warning mt-2 ${popularStyle.button}`}>
                                  <BiLike size={25} />
                                </button>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </div>
      </>
    )

}
export default popularList;