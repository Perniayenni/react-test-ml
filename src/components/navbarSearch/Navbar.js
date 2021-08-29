import React from "react";
import { Search } from "./Search";

export const NavbarSearch = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_content_logo_search">
        <div className="navbar_content_logo">
          <a className="navbar_logo" href="/"></a>
        </div>

        <Search />
      </div>
    </div>
  );
};
