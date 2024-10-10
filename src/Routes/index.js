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


// Using createBrowserRouter for path-based routing
const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />, // Main layout
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
        path: "/social-mediaa",
        element: <SocialMedia />, // Social Media page route
      },
      {
        path: "/users",
        element: <Users />, // Users page route
      },
      {
        path: "/terms-conditionsa",
        element: <TermConditions />, // Terms and Conditions page route
      },
      {
        path: "/admin-settingsa",
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
