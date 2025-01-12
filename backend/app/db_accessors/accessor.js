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
  static async postBlog(blogInfo) {}

  /* Function to find a blog by its id and then replace its content body. */
  static async updateBlogById(id, updatedContent) {}

  /* Function to find a blog by its id and then delete it. */
  static async deleteBlogById(id) {}
}
