"use client";
import React, { useEffect, useState } from "react";
import BlogCard, { Blog } from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const onDelete = async (_id: string) => {
    setBlogs(blogs.filter((blog: Blog) => blog._id != _id));
  };

  useEffect(() => {
    fetch("http://localhost:8001/all-blogs", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog: Blog, index) => (
            <div key={index}>
              <BlogCard {...blog} onDelete={onDelete} />
              <hr />
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
