import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashbord = () => {
  return (
    <div>
      <div className=" bg-purple-500  border-none mx-10  rounded-2xl ">
        <div className=" container mx-auto">
          <div className=" w-10/12 text-center mx-auto  text-white ">
            <h1 className="text-3xl font-bold pt-12">DashBoard</h1>
            <p className="w-9/12 md:w-7/12 mx-auto mt-6 ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            {/* btn */}
            <div className=" flex gap-4 md:gap-6  justify-center">
              <NavLink
                to="Cart"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold text-xl w-40 rounded-full mt-6 mb-8 text-purple-500 bg-purple-100"
                    : "btn font-bold text-xl border-2 border-white bg-purple-500 w-40 rounded-full mt-6 mb-8 text-white"
                }
              >
                Cart
              </NavLink>

              <NavLink
                to="List"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold text-xl w-40 rounded-full mt-6 mb-8 text-purple-500 bg-purple-100"
                    : "btn font-bold text-xl border-2 border-white bg-purple-500 w-40 rounded-full mt-6 mb-8 text-white"
                }
              >
                Wishlist
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashbord;
