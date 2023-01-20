import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Spinner from "./Spinner";

function Data() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="data">
      {error && <div className="error-message">{error}</div>}
      {isPending && <Spinner />}
      {blogs && (
        <BlogList className="blog-section" blogs={blogs} title="Recent Blog" />
      )}
    </div>
  );
}
export default Data;
