import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./layouts/Root";
import { RouterProvider } from "react-router";
import Router from "./routes/Router";
import { AuthContext } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={Router}>
        <Root />
        <ToastContainer />
      </RouterProvider>
    </AuthContext>
  </StrictMode>
);
