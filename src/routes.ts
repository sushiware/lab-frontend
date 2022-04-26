import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/hodl-is-yours",
    component: lazy(() => import("./pages/HodlIsYours")),
  },
];
