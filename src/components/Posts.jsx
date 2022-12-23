import React from "react";

function Posts({ posts, loading }) {
  if (loading) {
    return (
      <div className="text-center">
        <p style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Loading
          <span
            class="spinner-border text-primary"
            role="status"
            style={{ fontSize: "1rem" }}
          >
            <span class="visually-hidden">Loading...</span>
          </span>
          <span
            class="spinner-border text-primary"
            role="status"
            style={{ fontSize: "1rem" }}
          >
            <span class="visually-hidden">Loading...</span>
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="row">
      {posts.map((post) => {
        const { login, id, avatar_url, html_url } = post;
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 " key={id}>
            <div
              className="card"
              style={{ boxShadow: "0 5px 15px rgba(0,0,0,0.5)" }}
            >
              <div class="card-body text-center">
                <img
                  src={avatar_url}
                  class="card-img-top rounded-pill"
                  alt={login}
                  style={{ width: "50%" }}
                />
                <h5
                  class="card-title text-capitalize mt-3"
                  style={{ fontSize: ".8rem" }}
                >
                  {login}
                </h5>
                <a
                  href={html_url}
                  class="btn btn-primary "
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: ".8rem", padding: "0 .5rem" }}
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
