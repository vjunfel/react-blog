import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [firstName, setFirstName ] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, firstName}
    setIsPending(true)

    fetch("http://localhost:8000/blogs",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      setTimeout(()=>{
        console.log("New blog added")
        setFirstName('')
        setTitle('')
        setBody('')
        setIsPending(false)
        history("/create")
      }, 1500);
    })
  } 

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input type="text" 
          required 
          value = {title} 
          onChange={(e) => setTitle(e.target.value)}/>
        <label>Blog body: </label>
        <textarea 
          required
          value = {body}
          onChange = {(e) => setBody(e.target.value)}
          ></textarea>
        <label>Blog author: </label>
        <select
          required
          value={firstName}
          onChange = {((e)=> setFirstName(e.target.value))}
          >
          <option value="">Select Author</option>
          <option value="Junfel">Junfel</option>
          <option value="Erwinian">Erwin</option>
          <option value="Jerrica">Jerry</option>
        </select>
       {!isPending ? <button>Add Blog</button> 
        : <p className="submit-message"> Adding blog post...</p>}
      </form>
    </div>
  );
};

export default Create; 