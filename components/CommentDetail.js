import React, { useState, useEffect } from "react";
import Image from "next/image";
import imgUser from "../public/images/user.png";
import detailStyle from "../styles/detail.module.css";
import { useRouter } from "next/router";
import axios from "axios";


const detailComment = () => {
    const [commentRecipe, setCommentRecipe] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        getCommentRecipe();
    }, []);


    const getCommentRecipe = () => {
      axios.get(`http://localhost:8001/api/comment/recipe/${id}`)
      .then((res) => {
        const dataComment = res?.data?.data;
        setCommentRecipe(dataComment)
      })
      .catch((err) => {
        console.log(err);
      }); 
    };

    return (
        <>
            <div className="mt-4 mx-4">
                <div className={detailStyle.comment}>
                  <p>Comment:</p>
                </div>
            </div>
            {commentRecipe?.map((item, index) => {
                return (
                  <div key={index} className="row mx-4">
                    <div className="col-3 text-center">
                      <div className={detailStyle.imgComment}>
                        <Image src={imgUser} />
                      </div>
                    </div>
                    <div className="col-9 px-0">
                      <h6>{item.username}</h6>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                )
            })}
        </>
    )
}

export default detailComment;