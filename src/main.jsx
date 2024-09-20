import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Page_Test from "./Pages/teste/page_test";
// Importações basicas do CSS //

import "./index.css";
import "./colors.css";
import About from "./Pages/About";
import Support from "./Pages/Support";
import Auth from "./Pages/Auth";

// -------------------- //

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/teste",
    element: <Page_Test />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
