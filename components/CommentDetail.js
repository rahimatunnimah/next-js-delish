import React, { useState, useEffect } from "react";
import Image from "next/image";
import imgUser from "../public/images/user.png";
import detailStyle from "../styles/detail.module.css";
import { useRouter } from "next/router";
import axios from "axios";

const detailComment = (props) => {
  return (
    <>
      <div className="mt-4 mx-4">
        <div className={detailStyle.comment}>
          <p>Comment:</p>
        </div>
      </div>
      {props?.data?.map((item, index) => {
        return (
          <div key={index} className="row mx-4">
            <div className="col-3 p-0 text-center">
              <div className={detailStyle.imgComment}>
                <Image src={item.image} width={50} height={50} />
              </div>
            </div>
            <div className="col-9 px-0">
              <h6>{item.username}</h6>
              <p>{item.comment}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default detailComment;
