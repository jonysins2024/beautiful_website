import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import AdminRoute from "../pages/PrivateRoutes/AdminRoutes/AdminRoute";
import ManageClasses from "../pages/PrivateRoutes/AdminRoutes/ManageClasses";
import DashboardHome from "../pages/PrivateRoutes/DashboardHome";
import PrivateRoute from "../pages/PrivateRoutes/PrivateRoute";
import Work_Permit from "../components/Survices/Work_Permit";
import Visa from "../components/Survices/Visa";
import Application_Stts from "../components/Survices/Application_Stts";
import Lima from "../components/Survices/Lima";
import MaltipleInput from "../components/Survices/MaltipleInput";
import InstructorRoute from "../pages/PrivateRoutes/InstructorRoutes/InstructorRoutes";
import ManagePost from "../pages/PrivateRoutes/InstructorRoutes/ManagePost";
import Changedate from "../pages/PrivateRoutes/AdminRoutes/Changedate";
import Update_User from "../pages/PrivateRoutes/AdminRoutes/Update_User";
import Update_A_User from "../components/Update_A_User";
import Admin_Control from "../components/Admin_Control/Admin_Control";
import Control_Post from "../components/Control_Post/Control_Post";
import Not_Found_Website from "../components/Not_Found_Website/Not_Found_Website";
import Error from "../components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <NotFoundPage />,
    children: [
      // {
      //   path: '/',
      //   element: <Home />,
      // },
      {
        path: '/',
        element: <Not_Found_Website></Not_Found_Website>,
      },
      // {
      //   path: '/',
      //   element: <Error></Error>,
      // },
      {
        path: "/Work_Permit",
        element: <Work_Permit></Work_Permit>
      },
      {
        path: "/Visa",
        element: <Visa></Visa>
      },
      {
        path: "/Application_Stts",
        element: <Application_Stts></Application_Stts>
      },
      {
        path: "/Lima",
        element: <Lima></Lima>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/MaltipleInput",
        element: <MaltipleInput />,
      },
      {
        path: "/Update_A_User/:id",
        element: (
          <Update_A_User></Update_A_User>
        ),
        loader: ({ params }) => fetch(`https://backend-kappa-puce.vercel.app/User_Data/${params.id}`)
      },

    ],
  },
  {
    path: "/dashboard",
    errorElement: <NotFoundPage />,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      // admin routes
      {
        path: "Entry",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },

      {
        path: "change-date",
        element: (
          <AdminRoute>
            <Changedate />
          </AdminRoute>
        ),
      },
      {
        path: "update",
        element: (
          <AdminRoute>
            <Update_User></Update_User>
          </AdminRoute>
        ),
      },
      {
        path: "Admin_Control",
        element: (
          <AdminRoute>
            <Admin_Control></Admin_Control>
          </AdminRoute>
        ),
      },
      {
        path: "Control_Post",
        element: (
          <AdminRoute>
            <Control_Post></Control_Post>
          </AdminRoute>
        ),
      },
      // modarator routes
      {
        path: "ManagePost",
        element: (
          <InstructorRoute>
            <ManagePost></ManagePost>
          </InstructorRoute>
        ),
      },
    ],
  },
]);
