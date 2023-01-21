import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Spinner from "./Spinner";
import useFetch from "./useFetch";

const Data = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8500/blogs");

  return (
    <div className="data">
      {error && <div className="error-message">{error}</div>}
      {isPending && <Spinner />}
      {blogs && (
        <BlogList className="blog-section" blogs={blogs} title="Recent Blog" />
      )}
    </div>
  );
};
export default Data;
