import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { FiBookmark, FiPlay } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import detailStyle from "../../../styles/detail.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import CommentDetail from "../../../components/CommentDetail";
import VideoRecipe from "../../../components/VideoRecipe";
import AddVideo from "../../../components/AddVideo";
import Swal from "sweetalert2";

const detailRecipe = () => {
  const [detailRecipe, setDetailRecipe] = useState([]);
  const [comment, setComment] = useState([]);
  const [commentRecipe, setCommentRecipe] = useState([]);
  const [video, setVideo] = useState([]);
  const [userStorage, setUserStorage] = useState({});
  const [tokenStorage, setTokenStorage] = useState({});
  const [show, setShow] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setUserStorage(JSON.parse(localStorage?.getItem("user")));
    setTokenStorage(localStorage?.getItem("token"));
    getDetailRecipe();
    getCommentRecipe();
    getVideoRecipe();
  }, [id, userStorage?.id, video?.id]);

  const config = {
    headers: {
      Authorization: `Bearer ${tokenStorage}`,
    },
  };

  const getDetailRecipe = () => {
    axios
      .get(`http://localhost:8001/api/recipes/detail/${id}`)
      .then((res) => {
        const dataRecipe = res?.data?.data[0];
        setDetailRecipe(dataRecipe);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCommentRecipe = () => {
    axios
      .get(`http://localhost:8001/api/comment/recipe/${id}`)
      .then((res) => {
        const dataComment = res?.data?.data;
        setCommentRecipe(dataComment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addComment = (e) => {
    e.preventDefault();
    const body = {
      comment,
      recipe_id: detailRecipe?.id,
      user_id: userStorage?.id,
    };
    axios
      .post(`http://localhost:8001/api/comment/add`, body, config)
      .then((res) => {
        router.reload();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: "error",
        });
      });
  };

  const getVideoRecipe = () => {
    axios
      .get(`http://localhost:8001/api/recipes/video/${id}`)
      .then((res) => {
        const dataVideo = res?.data?.data;
        setVideo(dataVideo);
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
            <Image
              src={detailRecipe?.recipe_image}
              height={500}
              width={500}
              alt="img-recipe"
            />
            <div className={detailStyle.iconBack}>
              <Link href="/" passHref>
                <IoMdArrowBack size={30} />
              </Link>
            </div>
            <div className="row">
              <div className="col-8">
                <div className={detailStyle.title}>
                  <h4>{detailRecipe?.name}</h4>
                  <p>By {detailRecipe?.username}</p>
                </div>
              </div>
              <div className="col-2" style={{ paddingLeft: "28px" }}>
                <div className={detailStyle.iconBookmark}>
                  <FiBookmark size={25} />
                </div>
              </div>
              <div className="col-2">
                <div className={detailStyle.iconLike}>
                  <BiLike size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className={`row ${detailStyle.bgEnd}`}>
            <div className="container">
              <Tabs
                defaultActiveKey="ingredients"
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
                  {userStorage?.id === detailRecipe?.user_id ? (
                    <>
                      <VideoRecipe data={video} />
                      <AddVideo
                        show={show}
                        handleShow={handleShow}
                        handleClose={handleClose}
                        idRecipe={detailRecipe?.id}
                        idUser={userStorage?.id}
                        config={config}
                        getVideo={getVideoRecipe}
                      />
                    </>
                  ) : (
                    <VideoRecipe data={video} />
                  )}
                </Tab>
              </Tabs>
              <div className="mt-4 mx-4">
                <form onSubmit={addComment}>
                  <div className={detailStyle.contentComment}>
                    <textarea
                      className={`form-control ${detailStyle.commentText}`}
                      id="exampleFormControlTextarea1"
                      rows="9"
                      placeholder="Comment:"
                      defaultValue={""}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                  <div class="d-grid gap-2 mt-4">
                    <button
                      className="btn btn-warning text-white btn-lg"
                      type="input"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <CommentDetail data={commentRecipe} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default detailRecipe;
