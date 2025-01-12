"use client";
import React from "react";
import Blogs from "../components/Blogs";

/*
This is the default react component sent to the layout.tsx file, 
it simply passes along the Blogs component.

Next.js will only take files named page.tsx to send to layout.tsx to display.
*/

export default function Home() {
  return <Blogs />;
}
