import { Link } from "react-router-dom";
import Footer from "./Footer";

const BlogList = ({ blogs, title }) => {
  return (
      <div className="blog-list container">
        <h1 className="blog-title-main">{title}</h1>

        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`} className="blog-item">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-author">
                Written By : {blog.firstName} {blog.lastName}
              </p>
              <p className="blog-content">{blog.body}</p>
            </Link>
          </div>
        ))}
      <Footer/>
      </div>
  );
};

export default BlogList;
