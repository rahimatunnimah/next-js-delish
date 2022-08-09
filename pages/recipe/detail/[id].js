import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { FiBookmark, FiPlay } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import detailStyle from "../../../styles/detail.module.css";
import popularStyle from "../../../styles/popular.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import CommentDetail from "../../../components/CommentDetail";
import AddComment from "../../../components/AddComment";

const detailRecipe = () => {
    const [detailRecipe, setDetailRecipe] = useState([]);
    const [userStorage, setUserStorage] = useState({});
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        setUserStorage(JSON.parse(localStorage?.getItem("user")));
        getDetailRecipe();
    }, [id, userStorage?.id]);

    const getDetailRecipe = () => {
      axios.get(`http://localhost:8001/api/recipes/detail/${id}`)
      .then((res) => {
        const dataRecipe = res?.data?.data[0];
        setDetailRecipe(dataRecipe);
      })
      .catch((err) => {
        console.log(err);
      }); 
    };

    
  return (
    <>
      <div id="detailPage" className="row justify-content-center">
        <div className="col-md-4">
          <div className={`row ${detailStyle.bgStart}`}>
                <Image src={`http://localhost:8001/${detailRecipe?.recipe_image?.substring(
                    7,
                    detailRecipe.recipe_image.length
                )}`} height={500} width={500} alt="img-recipe" />
            <div className={detailStyle.iconBack}>
                <Link href="/" passHref>
                    <IoMdArrowBack size={30}/>
                </Link>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className={detailStyle.title}>
                        <h4>{detailRecipe?.name}</h4>
                        <p>By {detailRecipe?.username}</p>
                    </div>
                </div>
                <div className="col-2" style={{paddingLeft:"28px"}}>
                    <div className={detailStyle.iconBookmark}>
                        <FiBookmark size={25}/>
                    </div>
                </div>
                <div className="col-2">
                    <div className={detailStyle.iconLike}>
                        <BiLike size={25}/>
                    </div>
                </div>
            </div>
          </div>
          <div className={`row ${detailStyle.bgEnd}`}>
            <div className="container">
              <Tabs
                defaultActiveKey="video"
                id="uncontrolled-tab-example"
                className="mt-3"
              >
                <Tab eventKey="ingredients" title="Ingredients">
                    <div className="container">
                        <div className="row mx-3">
                            <div className={detailStyle.ingredients}>
                                {detailRecipe.ingredients}
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="video" title="Video Step">
                  <div className={`row mt-3 mx-4 ${detailStyle.listVideo}`}>
                    <div className="col-3 text-center">
                      <div className={popularStyle.buttonLike}>
                        <button
                          type="button"
                          className={`btn btn-warning mt-2 ${popularStyle.button}`}
                        >
                          <FiPlay size={25} />
                        </button>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className={detailStyle.contentVideo}>
                        <h5 className="mt-2">Step 1</h5>
                        <p>Boil egg for 3 minutes</p>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
              <div>
                <AddComment/>
              </div>
              <div>
                <CommentDetail/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default detailRecipe;
