"use client";
import React from "react";
import BlogForm from "../../components/BlogForm";

/*
This is the page.tsx endpoint for the BlogForm, which is 
where we post new blogs from. Because it is a separate page,
we need a separate folder and a unqiue page.tsx for Next.js 
to pass layout.tsx
*/

export default function Home() {
  return <BlogForm />;
}
