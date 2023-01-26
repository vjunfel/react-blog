import { useNavigate, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import useFetch from "./useFetch";
import { FaTrash } from "react-icons/fa";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useNavigate()

  const handleClick = ()=>{
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    }).then(()=>{
        history("/")
    })
  }

  return (
    <div className="blog-details container">
      {isPending && <Spinner />}
      { error && <div>{ error }</div>}
      {blog && (
        <article className="blog-article">
          <h2 className="blog-title">{ blog.title } 
          </h2>
          <p className="blog-author"> 
            Written by { blog.firstName } {blog.lastName}
          </p>
          <div className="blog-content">{blog.body}</div>
          {/* <FaTrash onClick={handleClick} className="delete-button"/>  */}
          <button onClick={handleClick} className="delete-btn">Delete</button>
        </article>
      )}
      
    </div>
  );
}

export default BlogDetails; 