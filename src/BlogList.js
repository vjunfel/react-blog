const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1 className="blog-title-main">{title}</h1>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-author">
            Written By : {blog.firstName} {blog.lastName}, {blog.age}
          </p>
          <p className="blog-content">{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
