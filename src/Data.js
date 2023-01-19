import React, { useState } from "react";
import BlogList from "./BlogList";
import UserList from "./UserList";

function Data() {
  const [users, setUsers] = useState([
    { name: "Mario", age: "2" },
    { name: "John", age: "3" },
    { name: "Junfel", age: "5" },
    { name: "Jerome", age: "7" },
  ]);
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro neque nihil non sit.",
      author: "jen",
      id: 1,
    },
    {
      title: "Welcome party",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro neque nihil non sit. Consequuntur ab aspernatur temporibus maxime explicabo earum sequi deleniti perferendis eum voluptas molestias iure, ad vitae voluptatem dicta.",
      author: "junfel",
      id: 2,
    },
    {
      title: "Web dev top tips",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro neque nihil non sit. Consequuntur ab aspernatur temporibus maxime explicabo earum sequi deleniti perferendis eum voluptas molestias iure, ad vitae voluptatem dicta, deserunt animi repellendus asperiores aut natus sunt architecto. Atque minus optio error, repudiandae sequi saepe amet recusandae quibusdam.",
      author: "jen",
      id: 3,
    },
  ]);

  return (
    <>
      <BlogList
        className="blog-section"
        blogs={blogs}
        title="These are Blog Post"
      />
      <BlogList
        className="blog-section"
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blog Post"
      />
    </>
  );
}

export default Data;
