import React from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";

import { Footer } from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsData } from "./api/Api";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:ProductsData
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
