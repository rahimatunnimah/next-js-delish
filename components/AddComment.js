import React, { useState, useEffect } from "react";
import detailStyle from "../styles/detail.module.css";

const addComment = () => {
    return (
        <>
            <div className="mt-4 mx-4">
                <form>
                  <div className={detailStyle.contentComment}>
                    <textarea
                      className={`form-control ${detailStyle.commentText}`}
                      id="exampleFormControlTextarea1"
                      rows="9"
                      placeholder="Comment:"
                      defaultValue={""}
                    />
                  </div>
                  <div class="d-grid gap-2 mt-4">
                    <button
                      className="btn btn-warning text-white btn-lg"
                      type="button"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
        </>
    )
}

export default addComment;




// const insertComment = () => {
//       if(addComment === "") {
//         Swal.fire("comment are required")
//       } else {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${tokenStorage}`,
//           },
//         };
//         const dataAddComment = {
//           comment: addComment,
//           idRecipe: id,
//           idUser: userStorage?.id,
//         }
//         axios.post(`http://localhost:8001/api/comment/add`, dataAddComment, config)
//         .then((res) => {
//           console.log(res)
//           Swal.fire({
//             icon: "success",
//             text: "Comment added successfully",
//           }).then((result) => (result.isConfirmed ? router.replace(`recipe/detail/${id}`) : null));
//         })
//         .catch((err) => {
//           Swal.fire({
//             icon: "error",
//             text: "You must login",
//           })
//           console.log(err)
//         })
//       }
//     }



    
            