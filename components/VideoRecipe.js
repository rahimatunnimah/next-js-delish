import React from "react";
import detailStyle from "../styles/detail.module.css";
import popularStyle from "../styles/popular.module.css";
import { FiPlay } from "react-icons/fi";

const VideoRecipe = (props) => {
  return (
    <>
      {props?.data?.length === 0 ? (
        "gak ada video"
      ) : (
        <>
          {props?.data?.map((item, index) => (
            <div
              key={index}
              className={`row mt-3 mx-4 ${detailStyle.listVideo}`}
            >
              <div className="col-3 text-center">
                <div className={popularStyle.buttonLike}>
                  <button
                    type="button"
                    className={`btn btn-warning mt-2 ${popularStyle.button}`}
                  >
                    <a
                      target="_blank"
                      href={item.video}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FiPlay size={25} />
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-9">
                <div className={detailStyle.contentVideo}>
                  <h5 className="mt-2">Step {index + 1}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default VideoRecipe;
