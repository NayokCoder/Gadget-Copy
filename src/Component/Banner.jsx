const Banner = () => {
  return (
    <div className=" bg-purple-500 mb-32 lg:mb-96 border-none mx-10  rounded-2xl ">
      <div className=" container mx-auto">
        <div className=" w-10/12 text-center mx-auto relative text-white ">
          <h1 className="text-2xl md:text-6xl font-bold pt-12">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="w-9/12 md:w-7/12 mx-auto mt-4 md:mt-6 ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn font-bold text-xl rounded-full mt-6 mb-32 lg:mb-80 text-purple-500">
            Shop Now
          </button>
          <div className="border-2 p-6 w-full mx-auto rounded-3xl mb-12 absolute top-96">
            <img
              className="rounded-2xl w-full object-cover  lg:h-[600px] "
              src="../../public/Resource/banner.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
