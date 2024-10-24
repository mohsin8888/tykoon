import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layout/DashboardLayout";
import { Dashboard } from "../pages/Dashboard";
import { Chat } from "../pages/Chat";
import { Partnership } from "../pages/Partnership";
import { SocialMedia } from "../pages/SocialMedia";
import { Users } from "../pages/Users";
import { TermConditions } from "../pages/TermConditions";
import { AdminSetting } from "../pages/AdminSetting";
import  Faq  from "../pages/Faq";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { RedirectRoute } from "./RedirectRoute";
import VerifyOtp from "../pages/VerifyOtp";
import ChangePassword from "../pages/ChangePassword";
import ResetPassword from "../pages/ResetPassword";

// Using createBrowserRouter for path-based routing
const Router = createBrowserRouter([

  {
    
    path: "/verify",
    element: <VerifyOtp/>,
  },
  {
    
    path: "/newpassword",
    element: <ChangePassword/>,
  },
  {
    
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/login",
    element: (
      <RedirectRoute>
        <Login />
      </RedirectRoute>
    ),
  },


  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
    
     
      {
        path: "/",
        element: <Dashboard />, // Dashboard page route
      },
      {
        path: "/chat",
        element: <Chat />, // Chat page route
      },
      {
        path: "/partnership",
        element: <Partnership />, // Partnership page route
      },
      {
        path: "/social-media",
        element: <SocialMedia />, // Social Media page route
      },
      {
        path: "/users",
        element: <Users />, // Users page route
      },
      {
        path: "/terms-conditions",
        element: <TermConditions />, // Terms and Conditions page route
      },
      {
        path: "/admin-settings",
        element: <AdminSetting />, // Admin Setting page route
      },
      {
        path: "/faqa",
        element: <Faq />, // FAQ page route
      },
    ],
  },
]);

export default Router;
