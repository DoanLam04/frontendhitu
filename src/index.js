import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./output.css";
import Home from "./layout/Home";
import DetailProduct from "./layout/DetailProduct";
import ThongTin from "./pages/ThongTin";
import TinTuc from "./pages/TinTuc";
import HoatDong from "./pages/HoatDong";
import Login from "./auth/Login";
import User from "./pages/User";
import QrReader from "./pages/QrReader";
import Loading from "./component/Loading";
import AuthPage from "./auth/AuthPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/detail-product", element: <DetailProduct /> },
      { path: "/tintuc", element: <TinTuc /> },
      { path: "/thongtin", element: <ThongTin /> },

      { path: "/auth", element: <AuthPage /> },
      { path: "/hoatdong", element: <HoatDong /> },
      { path: "/taikhoan", element: <User /> },
      { path: "qr-reader", element: <QrReader /> },
      { path: "/loading", element: <Loading /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
