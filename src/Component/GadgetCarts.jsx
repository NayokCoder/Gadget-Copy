import { useLoaderData, useParams } from "react-router-dom";
import MainCards from "./MainCards";
import { useEffect, useState } from "react";

const GadgetCarts = () => {
  const allDatas = useLoaderData(); // Array of all data
  const { Category } = useParams(); // Destructure 'category' from route params
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (Category) {
      // Filter items based on the 'category' parameter
      const filteredByCategory = allDatas.filter(
        (gadget) => gadget.category === Category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(allDatas);
    }
  }, [allDatas, Category]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {gadgets.map((allData) => (
        <MainCards key={allData.id} allData={allData} />
      ))}
    </div>
  );
};

export default GadgetCarts;
