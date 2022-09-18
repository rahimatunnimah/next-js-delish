import React from "react";
import { Pagination } from "react-bootstrap";

function Page({ itemPerPage, totalItem, paginate, currentPage }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <Pagination className="mb-3 d-flex justify-content-center">
        {pageNumber.map((number) => (
          <a onClick={() => paginate(number)}>
            <Pagination.Item active={number === currentPage}>
              {number}
            </Pagination.Item>
          </a>
        ))}
      </Pagination>
    </>
  );
}

export default Page;
