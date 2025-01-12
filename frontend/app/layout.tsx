import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";

/*
This file is the entry point for our frontend, this means the website 
starts here and then calls the remaining files as needed. This file 
stores all the metadata about our website (language, name, etc.).

We want the same NavBar to persist across all pages on our website, 
so we set it up here to ensure the same instance is present everywhere.

The server automatically sends layout.tsx a react component to use as the 
"children" which is what it also displays.
*/

export const metadata: Metadata = {
  title: "My Blog",
  description: "Full tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
