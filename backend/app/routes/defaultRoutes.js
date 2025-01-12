/* This is the routes file. When a user navigates to a specific 
URL, this file subsequently determines which function to call to 
set off the chain of backend function calls to get the information 
the user is looking for. */

import express from "express";
import Controller from "../controllers/controller.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({
    message: "Successfully connected to the NU Sci teaching project!",
  });
});

router.route("/all-blogs").get(Controller.getBlogs);
router.route("/create-blog");
router.route("/update-blog/:id");
router.route("/delete-blog/:id");

export default router;
