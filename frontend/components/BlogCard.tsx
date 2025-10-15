"use client";
import React, { ChangeEvent, useState } from "react";

/*
This file represents the display of one unique blog.
There are two buttons as well (edit and delete), which execute those backend routes.
*/
export interface Blog {
  _id: string;
  title: string;
  author: string;
  content: string;
}

export interface BlogCardProps extends Blog {
  onDelete: (_id: string) => void;
}

export default function BlogCard({ _id, title, author, content, onDelete }: BlogCardProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [stateContent, setStateContent] = useState(content);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStateContent(event.target.value);
  };

  const saveBlog = async () => {
    const response = await fetch(`http://localhost:8001/update-blog/${_id}`, {
      method: "PATCH", // has to match one used to routes
      headers: { // define type of information transfer
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: stateContent }),
    });

    setIsEditMode(false);
  };

  const editBlog = () => {
    setIsEditMode(true);
  };

  const deleteBlog = async () => {
    const response = await fetch("http://localhost:8001/delete-blog/" + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
        onDelete(_id);
    }
  };

  return (
    <div className="p-4 w-80 border-solid border-[#F7EECC] border-4">
      <p>{title}</p>
      <p>By: {author}</p>
      {isEditMode ? (
        <>
          <input type="text" value={stateContent} onChange={handleChange} />
          <button onClick={saveBlog}>Save</button>
        </>
      ) : (
        <>
          <p>{stateContent}</p>
          <button onClick={editBlog} className="bg-emerald-800 rounded px-5 py-1 cursor-pointer hover:bg-emerald-900 mt-3 ml-3">Edit</button>
        </>
      )}

      <br></br>
      <button onClick={deleteBlog} className="bg-red-800 rounded px-5 py-1 cursor-pointer hover:bg-red-900 mt-3 ml-3">Delete</button>
    </div>
  );
}
