import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import Pagination from "./Pagination";
import Posts from "./Posts";
import { useState } from "react";

const users = "https://api.github.com/users?per_page=100";

function Props() {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const { data, isLoading } = useQuery("users", async () => {
    const response = await axios(users);
    return response.data;
  });

  console.log(data);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const post = data?.slice(firstPostIndex, lastPostIndex);

  const changeCurrentPage = (value) => setCurrentPage(value);

  const finalIndex = posts.length / postPerPage;

  const prevPage = () => {
    setCurrentPage((prevCurrent) => {
      let prevPage = prevCurrent - 1;
      if (prevPage < 1) {
        prevPage = finalIndex;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setCurrentPage((prevCurrent) => {
      let nextPage = prevCurrent + 1;
      if (nextPage > finalIndex) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  return (
    <div className="container mt-5">
      <p
        className="text-center"
        style={{ fontSize: "2rem", fontWeight: "700" }}
      >
        {!isLoading && "Github Users"}
      </p>
      <Posts loading={isLoading} posts={post} />
      {!isLoading && (
        <Pagination
          postPerPage={postPerPage}
          totalPost={data?.length}
          changeCurrentPage={changeCurrentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Props;
