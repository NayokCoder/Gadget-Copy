import React from "react";
import Banner from "./Banner";
import Explore from "./Explore";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categories = useLoaderData();
  const allProduct = useLoaderData();
  // console.log(allProduct);
  const handleAllprodct = () => {
    // console.log(allProduct);
  };

  return (
    <div>
      <Banner />
      <Explore categories={categories} handleAllprodct={handleAllprodct} />
    </div>
  );
};

export default Home;
