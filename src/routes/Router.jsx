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
        element: (
          <PrivateRoute>
            <CreatePartnerProfile></CreatePartnerProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "myconnection",
        element: (
          <PrivateRoute>
            <MyConnection></MyConnection>
          </PrivateRoute>
        ),
      },
      {
        path: "user-info",
        element: <UserInfo></UserInfo>,
      },
      {
        path: "partner/:id",
        element: (
          <PrivateRoute>
            <PartnerDetails></PartnerDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
