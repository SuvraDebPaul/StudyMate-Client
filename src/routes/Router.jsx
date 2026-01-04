import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import FindPartner from "../pages/FindPartner";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../utilities/Loader";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import MyConnection from "../pages/MyConnection";
import UserInfo from "../pages/UserInfo";
import PartnerDetails from "../pages/PartnerDetails";
import PrivateRoute from "../provider/PrivateRoute";
import PasswordReset from "../pages/PasswordReset";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardPage from "../pages/dashboard/pages/DashboardPage";
import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../components/blogs/BlogDetails";
import About from "../pages/about";
import Contact from "../pages/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "findpartner",
        element: <FindPartner></FindPartner>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "partner/:id",
        element: <PartnerDetails></PartnerDetails>,
      },
      {
        path: "reset",
        element: <PasswordReset></PasswordReset>,
      },
      {
        path: "blog",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "blogs/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>,
      },
      {
        path: "partnerprofile",
        element: <CreatePartnerProfile></CreatePartnerProfile>,
      },
      {
        path: "myconnection",
        element: <MyConnection></MyConnection>,
      },
      {
        path: "profile",
        element: <UserInfo></UserInfo>,
      },
    ],
  },
]);

export default Router;
