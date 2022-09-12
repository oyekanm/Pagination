import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";

const users = "https://api.github.com/users?per_page=100";

function App() {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    const response = await fetch(users);
    const post = await response.json();
    setPost(post);
    setLoading(false);
  };
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const post = posts.slice(firstPostIndex, lastPostIndex);

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
        {!loading && "Github Users"}
      </p>
      <Posts loading={loading} posts={post} />
      {!loading && (
        <Pagination
          postPerPage={postPerPage}
          totalPost={posts.length}
          changeCurrentPage={changeCurrentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default App;
