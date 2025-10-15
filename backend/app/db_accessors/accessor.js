/* This is the accessor file. It connects to the database and 
retrieves the requested information from the database. This is 
done using MongoDB functions. */

import Connection from "../db/connection.js";
import Blog from "../models/blog.js";

export default class Accessor {
  /* Function to get every single blog. */
  static async getAllBlogs() {
    await Connection.open();
    const blogs = await Blog.find({});
    return blogs;
  }

  /* Function to add a new blog to the database */
  static async postBlog(blogInfo) {
    // open connection to db
    await Connection.open();

    // creating blog with blog info
    const blog = new Blog(blogInfo);

    // save to db
    await blog.save();

    return blog;
  }

  /* Function to find a blog by its id and then replace its content body. */
  static async updateBlogById(id, updatedContent) {
    await Connection.open();
    const updateBlog = await Blog.findByIdAndUpdate(
      id, 
      { content: updatedContent },
      { new: true } 
    );

    return updateBlog;
  }

  /* Function to find a blog by its id and then delete it. */
  static async deleteBlogById(id) {
    await Connection.open();
    await Blog.deleteOne({ _id: id });
  }
}
