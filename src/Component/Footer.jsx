const Footer = () => {
  return (
    <footer className="bg-purple-100 text-center py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold">Gadget Heaven</h2>
        <p className="text-gray-600 mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className=" pt-6 flex justify-around mt-8  border-t ">
          <div>
            <h3 className=" font-semibold mb-2 text-lg">Services</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#product-support"
                  className="text-gray-700 hover:underline"
                >
                  Product Support
                </a>
              </li>
              <li>
                <a
                  href="#order-tracking"
                  className="text-gray-700 hover:underline"
                >
                  Order Tracking
                </a>
              </li>
              <li>
                <a
                  href="#shipping-delivery"
                  className="text-gray-700 hover:underline"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#returns" className="text-gray-700 hover:underline">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg  mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#about-us" className="text-gray-700 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-700 hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#terms-of-service"
                  className="text-gray-700 hover:underline"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#privacy-policy"
                  className="text-gray-700 hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#cookie-policy"
                  className="text-gray-700 hover:underline"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
