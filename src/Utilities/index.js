import toast from "react-hot-toast";

// / get all cproduct
const getAllProduct = () => {
  const allproduct = localStorage.getItem("favorite");
  if (allproduct) {
    const favorite = JSON.parse(allproduct);
    return favorite;
  } else {
    return [];
  }
};
// Add  a product from Local storage

const addProduct = (product) => {
  // get previous data

  const favorites = getAllProduct();
  //   cheek double input
  const isExixt = favorites.find(
    (item) => item.product_id === product.product_id
  );
  if (isExixt) return toast.error("Product Already Added");
  favorites.push(product);
  localStorage.setItem("favorite", JSON.stringify(favorites));
  toast.success("Successfully Added To Favorite");
};

// remove product
const removeProduct = (product) => {
  const favorites = getAllProduct();
  const reamined = favorites.filter(
    (item) => item.product_id != product.product_id
  );
  localStorage.setItem("favorite", JSON.stringify(reamined));
  toast.success("Successfully Removed");
};

export { addProduct, getAllProduct, removeProduct };
