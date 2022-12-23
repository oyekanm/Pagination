import React from "react";

function Pagination({
  postPerPage,
  totalPost,
  changeCurrentPage,
  prevPage,
  nextPage,
  currentPage,
}) {
  const numbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    numbers.push(i);
  }
  return (
    <nav>
      <ul
        class="pagination text-center"
        style={{ backgroundColor: "transparent", color: "#000" }}
      >
        <li class="page-item" onClick={prevPage}>
          <a class="page-link text-dark" href="#">
            Prev
          </a>
        </li>
        {numbers.map((number) => {
          return (
            <li
              onClick={() => changeCurrentPage(number)}
              key={number}
              class={`page-item ${number === currentPage ? "active-btn" : ""} `}
            >
              <a
                class={`page-link text-dark ${
                  number === currentPage ? "active-btn" : ""
                } `}
                href="#"
              >
                {number}
              </a>
            </li>
          );
        })}

        <li class="page-item" onClick={nextPage}>
          <a class="page-link text-dark" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
