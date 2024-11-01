import React from "react";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  // Kiểm tra nếu pathname là "/qr-reader" thì ẩn Header và Footer
  const hideHeaderFooter = location.pathname === "/qr-reader";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
      <ToastContainer />
    </>
  );
}

export default App;
