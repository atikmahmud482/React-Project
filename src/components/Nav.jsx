import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext, useEffect, useState, useRef } from "react";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { LuUtensilsCrossed } from "react-icons/lu";
import Card2 from "./Card2";
import { useSelector } from "react-redux";

const Nav = () => {
  let { input, setInput, cate, setCate } = useContext(dataContext);

  // State to handle the shopping cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Ref for the shopping cart side panel
  const cartRef = useRef(null);

  // Toggle the shopping cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Close the cart if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let newlist = food_items.filter((item) => item.food_name.includes(input));
    setCate(newlist);
  }, [input]);

  // Using Redux to get cart items
  let cartItems = useSelector((state) => state.cart);
  return (
    <div className="w-full h-[80px] md:h-[100px] flex justify-between items-center px-4 md:px-8 fixed top-0 left-0 z-50 bg-white shadow-md">
      {/* Logo Container */}
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-slate-50">
        <MdFastfood className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] text-green-500" />
      </div>

      {/* Search Bar */}
      <form
        className="w-[60%] md:w-[70%] h-[50px] md:h-[60px] bg-white flex items-center px-4 md:px-5 gap-3 md:gap-5 rounded-md shadow-md hover:bg-slate-50"
        onSubmit={(e) => e.preventDefault()}>
        <IoSearch className="text-green-500 w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
        <input
          type="text"
          placeholder="Search Item..."
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* Shopping Bag */}
      <div
        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative hover:bg-amber-50 cursor-pointer"
        onClick={toggleCart} // Trigger toggle function on click
      >
        <span className="absolute top-0 right-1 md:right-2 text-green-500 font-bold text-sm md:text-base">
          {cartItems.length}
        </span>
        <LuShoppingBag className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] text-green-500" />
      </div>

      {/* Order Cart Side Panel */}
      <div
        ref={cartRef}
        className={`fixed top-0 right-0 w-[400px] h-full bg-white shadow-xl transition-transform transform ease-in-out duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="p-4">
          <h2 className="text-xl font-bold text-green-500">Order Items</h2>
          {/* Close Button */}
          <button
            className="absolute top-5 right-7 text-black text-xl hover:text-red-500"
            onClick={() => setIsCartOpen(false)}>
            <LuUtensilsCrossed />
          </button>

          {/* Cart Items */}
          <div className="w-full mt-8 flex flex-col gap-5">
            {cartItems.length > 0 ? (
              cartItems.map((cartItem) => (
                <Card2
                  key={cartItem.id}
                  name={cartItem.name}
                  price={cartItem.price}
                  image={cartItem.image}
                  id={cartItem.id}
                  qty={cartItem.qty}
                />
              ))
            ) : (
              <p className="text-center text-xl text-gray-600 mt-6">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
