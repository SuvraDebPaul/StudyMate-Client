import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

export default Router;
