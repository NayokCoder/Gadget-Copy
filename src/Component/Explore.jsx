import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Explore = ({ categories }) => {
  return (
    <div className="container mx-auto lg:mt-[450px] mb-24">
      <h1 className="text-5xl font-bold mb-12 text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Category Div */}
        <div className="mx-auto mb-5 max-w-xs p-6 space-y-6 h-fit bg-purple-100 rounded-2xl">
          <NavLink
            to="Alldata"
            className={({ isActive }) =>
              isActive
                ? "btn btn-neutral w-full border-none rounded-full bg-purple-500 text-white"
                : "btn btn-neutral w-full border-none rounded-full"
            }
          >
            ALL Product
          </NavLink>
          {categories.map((category) => (
            <NavLink
              to={`Category/${category.category}`}
              key={category.category}
              className={({ isActive }) =>
                isActive
                  ? "btn btn-neutral w-full border-none rounded-full bg-purple-500 text-white"
                  : "btn btn-neutral w-full border-none rounded-full"
              }
            >
              {category.category}
            </NavLink>
          ))}
        </div>
        {/* Product List Div */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Explore;
