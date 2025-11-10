import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./layouts/Root";
import { RouterProvider } from "react-router";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}>
        <Root />
      </RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
