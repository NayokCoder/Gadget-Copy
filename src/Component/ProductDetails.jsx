import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { addProduct } from "../Utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { product_id } = useParams();
  const { addToCart } = useCart();

  const Id = parseInt(product_id);

  const allProductdata = useLoaderData();
  const product = allProductdata.find((product) => product.product_id === Id);
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
    urabilit,
    battery_capacity,
    front_camera_features,
    color_options,
    battery_life,
    water_resistance,
  } = product;

  // add handleFav
  const handleFav = (product) => {
    addProduct(product);
  };

  return (
    <div>
      <div className=" bg-purple-500 border-none mx-10  rounded-2xl mb-[350px] ">
        <div className=" container mx-auto">
          <div className=" w-10/12  mx-auto relative text-white ">
            <h1 className="text-3xl font-bold pt-12 text-center">
              Product Details
            </h1>
            <p className="w-7/12 mx-auto mt-4 text-center ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className=" font-bold text-xl rounded-full mt-6 mb-48 text-purple-500"></button>
            <div className=" p-6 w-full lg:h-[500px]  rounded-3xl  absolute top-44 bg-purple-100  text-black md:flex  gap-6 mb-5 ">
              {/* details part */}
              <div className=" w-full md:w-2/5 h-full">
                <img
                  src={product.product_image}
                  alt={product.product_title}
                  className="rounded-lg h-full  w-ful  object-cover"
                />
              </div>
              {/* ------- */}
              <div className="mt-4 md:w-3/5 space-y-5">
                <h2 className="md:text-2xl font-bold">
                  {product.product_title}
                </h2>
                <p className="text-xl font-semibold text-gray-600 mt-2">
                  {" "}
                  Price: ${product.price}
                </p>

                <span
                  className={`text-sm font-semibold mt-1 inline-block px-3 py-1 rounded-full ${
                    product.availability
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.availability ? "In Stock" : "Out of Stock"}
                </span>

                <p className="text-gray-600 mt-4">{product.description}</p>
                {/* Specifications */}
                <h3 className="text-lg font-bold mt-4">Specification:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  {product.specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>

                {/* Rating */}
                <div className="flex items-center mt-4">
                  <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆</span>
                  <span className="ml-2 text-gray-600">{product.rating}</span>
                </div>
                {/* Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:space-y-0 space-y-5">
                  <button
                    className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-600 transition"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                  </button>
                  <button
                    className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-600 transition "
                    onClick={() => handleFav(product)}
                  >
                    <FontAwesomeIcon icon={faHeart} size="lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLink
        to={"/"}
        className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-600 transition w-40 btn mx-auto mb-6 "
      >
        Shop More
      </NavLink>
    </div>
  );
};

export default ProductDetails;
