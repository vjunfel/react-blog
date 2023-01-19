// const BlogList = (props) => {
//   const blogs = props.blogs;
//   const title = props.title;

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1 className="blog-title-main">{title}</h1>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-author">
            Written By :{"\u00A0"}
            {blog.author.charAt(0).toUpperCase() + blog.author.slice(1)}
          </p>
          <p className="blog-content">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
