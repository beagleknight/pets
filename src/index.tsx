import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./common/RootPage";
import { dogsRoutes } from "./dogs/routes";
import { catsRoutes } from "./cats/routes";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage />,
    children: [...dogsRoutes, ...catsRoutes],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
