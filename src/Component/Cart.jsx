import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedItems = [...cartItems].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  const totalCost = sortedItems.reduce((total, item) => total + item.price, 0);
  const handlePurchase = () => {
    document.getElementById("my_modal_4").showModal();
  };

  return (
    <div className="container mx-auto flex flex-col mt-12 w-11/12 lg:w-full ">
      <div className="container mx-auto flex justify-between border-2 rounded-xl px-6">
        <h1 className="card-title text-4xl font-bold">Cart</h1>
        <div className="flex justify-between w-5/12 items-center">
          <h1 className="card-title text-2xl font-bold">
            Total cost: ${totalCost.toFixed(2)}
          </h1>
          <button
            className="btn font-bold text-xl border-2 border-purple-500 rounded-full mt-6 mb-8 text-purple-500"
            onClick={handleSort}
          >
            Sort By Price
          </button>
          <button
            className="btn font-bold text-xl bg-purple-500 rounded-full mt-6 mb-8 text-white"
            onClick={() => handlePurchase()}
          >
            Purchase
          </button>
        </div>
      </div>
      {sortedItems.length === 0 ? (
        <p className="card-title mt-4">
          Haven't Chose Anything
          <img
            className=" w-2/4 h-4/4 mx-auto mt-4 lg:mt-12 rounded-xl "
            src="/public/Resource/gadgets-accessories-gadgets-accessories-isolated-white-background-133429004.webp"
            alt=""
          />
        </p>
      ) : (
        sortedItems.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row p-6 border-2 rounded-2xl gap-6 mt-6 mb-6 bg-purple-100"
          >
            <img
              className="w-full md:w-72 h-48 rounded-xl object-cover"
              src={product.product_image}
              alt={product.product_title}
            />
            <div className="space-y-6">
              <h2 className="card-title text-2xl font-bold">
                {product.product_title}
              </h2>
              <h2>
                <span className="font-bold">Description:</span>{" "}
                {product.description}
              </h2>
              <p className="font-bold">Price: ${product.price}</p>
            </div>
          </div>
        ))
      )}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 ">
          <img className="mx-auto" src="/public/Resource/Group.png" alt="" />
          <h3 className="font-bold text-lg text-center mt-6">
            Payment Successfull
          </h3>
          <p className="py-4 text-center">Thank You For Purches</p>
          <h1 className=" text-2xl font-bold text-center">
            Total cost: ${totalCost.toFixed(2)}
          </h1>
          <div className="modal-action w-full">
            <form method="">
              <button className="btn w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>{" "}
    </div>
  );
};

export default Cart;
