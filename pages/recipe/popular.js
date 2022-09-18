import React, { useState, useEffect } from "react";
import popularStyle from "../../styles/popular.module.css";
import { IoIosArrowBack } from "react-icons/io";
import ListPopular from "../../components/ListPopular";
import Page from "../../components/Pagination";
import Link from "next/link";
import axios from "axios";

const popularList = () => {
  const [popularList, setPopularList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/recipes/popular/list`)
      .then((res) => {
        const dataPopular = res?.data?.result;
        setPopularList(dataPopular);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexOfLastPage = currentPage * itemPerPage;
  const indexOfFirstPage = indexOfLastPage - itemPerPage;
  const currentItem = popularList.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="row mt-4">
              <div className="col-4">
                <div className={popularStyle.iconBack}>
                  <Link href="/" passHref>
                    <IoIosArrowBack size={32} />
                  </Link>
                </div>
              </div>
              <div className="col-8 mb-4">
                <div className={popularStyle.titlePage}>
                  <p className="mb-3">Popular Menu</p>
                </div>
              </div>
              <ListPopular data={currentItem} />
              <Page
                itemPerPage={itemPerPage}
                totalItem={popularList.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default popularList;
