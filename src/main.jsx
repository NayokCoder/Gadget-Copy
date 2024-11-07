import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootMain from "./Component/RootMain";
import Home from "./Component/Home";
import Statistics from "./Component/Statistics";
import Dashbord from "./Component/Dashbord";
import GadgetCarts from "./Component/GadgetCarts";
import ProductDetails from "./Component/ProductDetails";
import Cart from "./Component/Cart";
import List from "./Component/List"; // Corrected case from "list" to "List"
import ErrorBoundary from "./Component/ErrorBoundary";
import Explore from "./Component/Explore";
import GagetBlog from "./Component/GagetBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootMain />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/public/DataCategory.json"),
        children: [
          {
            path: "/",
            element: <GadgetCarts />,
            loader: () => fetch("/public/9data.json"),
          },
          {
            path: "Alldata",
            element: <GadgetCarts />,
            loader: () => fetch("/Alldata.json"),
          },
          {
            path: "Category/:Category",
            element: <GadgetCarts />,
            loader: () => fetch("/Alldata.json"),
          },
          {
            path: "Explore",
            element: <Explore />,
          },
        ],
      },
      {
        path: "/Statistics",
        element: <Statistics />,
      },
      {
        path: "Gaget",
        element: <GagetBlog />,
      },
      {
        path: "/Dashbord",
        element: <Dashbord />,
        children: [
          {
            path: "Cart",
            element: <Cart />,
          },
          {
            path: "List",
            element: <List />,
          },
        ],
      },
      {
        path: "/Productdetails/:product_id",
        element: <ProductDetails />,
        loader: () => fetch("/Alldata.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
