import type { Component } from "solid-js";
import { Link } from "solid-app-router";

import logo from "./logo.svg";

const Header: Component = () => {
  return (
    <header class="flex justify-between border-2 border-black">
      <h1 class="m-auto">
        <Link href="/">
          <img src={logo} alt="logo" width="50" />
        </Link>
      </h1>
      <nav class="flex list-none py-2">
        <ul class="border-x-2 px-2 mr-2 border-black">
          {/* <Link href="/hodl-is-yours">Soon</Link> */}
          <p>Soon</p>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
