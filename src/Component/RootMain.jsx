import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "../context/CartContext"; // Import the CartProvider

const RootMain = () => {
  return (
    <CartProvider>
      <div className="bg-slate-100">
        <Navbar />
        <Outlet />
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
};

export default RootMain;
