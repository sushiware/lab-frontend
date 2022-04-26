import { Component, lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes, Link } from "solid-app-router";

import Header from "./Header";
import { routes } from "./routes";

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <>
      <div class="p-2">
        <Header />
      </div>
      <Routes />
    </>
  );
};

export default App;
