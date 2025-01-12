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

  const saveBlog = async () => {};

  const editBlog = () => {};

  const deleteBlog = async () => {};

  return (
    <div>
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
          <button onClick={editBlog}>Edit</button>
        </>
      )}

      <br></br>
      <button onClick={deleteBlog}>Delete</button>
    </div>
  );
}
