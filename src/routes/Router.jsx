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
        path: "partnerprofile",
        element: <CreatePartnerProfile></CreatePartnerProfile>,
      },
      {
        path: "myconnection",
        element: <MyConnection></MyConnection>,
      },
      {
        path: "user-info",
        element: <UserInfo></UserInfo>,
      },
      {
        path:"partner/:id",
      }
    ],
  },
]);

export default Router;
