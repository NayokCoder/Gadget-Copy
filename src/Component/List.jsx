import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // Import the useCart hook
import { getAllProduct, removeProduct } from "../Utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const [favProducts, setFavProducts] = useState([]);
  const { addToCart } = useCart(); // Access the addToCart function from context

  useEffect(() => {
    const favorites = getAllProduct();
    setFavProducts(favorites);
  }, []);
  const handdleremove = (product) => {
    removeProduct(product);
    const favorites = getAllProduct();
    setFavProducts(favorites);
  };

  return (
    <div className="container mx-auto mt-12 w-11/12 lg:w-full">
      <h1 className=" text-2xl font-bold mb-4 text-center ">WishList</h1>
      <div>
        {favProducts.map((product) => (
          <div
            key={product.product_id}
            className="flex flex-col md:flex-row p-6 border-2 rounded-2xl gap-6 mt-6 mb-6 bg-purple-100"
          >
            <img
              className="w-full md:w-72 h-48 rounded-xl object-cover"
              src={product.product_image}
              alt=""
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
              <button
                onClick={() => addToCart(product)} // Add product to the cart
                className="btn font-bold text-xl w-full  md:w-40 rounded-full mt-6 mb-8 bg-purple-500 text-white"
              >
                Add to Cart
              </button>
            </div>
            <FontAwesomeIcon
              onClick={() => handdleremove(product)}
              className="  flex items-center justify-center"
              icon={faTrash}
              size="xl"
              style={{ color: "#d71d1d" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
