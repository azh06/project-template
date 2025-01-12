import React from "react";
import * as NavMenu from "@radix-ui/react-navigation-menu";

const NavBar = () => {
  return (
    <NavMenu.Root className="relative z-10 flex w-screen justify-center">
      <NavMenu.List className="center m-0 flex list-none bg-white p-1">
        <NavMenu.Item>
          <NavMenu.Link className="block px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none" href="/">
            Home
          </NavMenu.Link>
        </NavMenu.Item>

        <NavMenu.Item>
          <NavMenu.Link asChild>
            <a className="block px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none" href="/PostBlog">
              Post Blog
            </a>
          </NavMenu.Link>
        </NavMenu.Item>
      </NavMenu.List>
    </NavMenu.Root>
  );
};

export default NavBar;
