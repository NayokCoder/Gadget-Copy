import React from "react";
import { useNavigate } from "react-router-dom";

const MainCards = ({ allData }) => {
  const navigate = useNavigate();
  const { product_id, product_title, product_image, price } = allData;
  return (
    <div className="w-10/12 md:w-72 p-6  border-2 rounded-2xl space-y-4 bg-purple-100">
      <img
        className=" rounded-2xl w-full md:w-72 h-48 object-cover"
        src={product_image}
        alt="Shoes"
      />
      <div className="space-y-4">
        <h2 className="card-title font-bold text-xl ">{product_title}</h2>
        <p className="font-bold text-slate-600">Price : ${price}</p>
        <div className="card-actions ">
          <button
            onClick={() => navigate(`/Productdetails/${product_id}`)}
            className="btn text-purple-500 font-bold rounded-full "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
