import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext, useEffect, useState, useRef } from "react";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { LuUtensilsCrossed } from "react-icons/lu";
import Card2 from "./Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify"; // Import toast

const Nav = () => {
  let { input, setInput, cate, setCate } = useContext(dataContext);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
    let newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newlist);
  }, [input]);

  let cartItems = useSelector((state) => state.cart);
  let subTotal = cartItems.reduce((total, item) => total + item.price, 0);
  let deliveryFee = 40;
  let taxes = (subTotal * 0.5) / 100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className="w-full h-[80px] md:h-[100px] flex justify-between items-center px-4 md:px-8 fixed top-0 left-0 z-50 bg-white shadow-md">
      {/* Logo + Brand Name (Left Corner) */}
      <div className="flex items-center space-x-2">
        <MdFastfood className="w-[30px] h-[30px] text-green-500 md:w-[40px] md:h-[40px]" />
        <h1 className="text-xl md:text-2xl font-bold text-green-500">
          Foodie Delight
        </h1>
      </div>

      {/* Search Bar */}
      <form
        className="w-[50%] md:w-[60%] h-[50px] md:h-[60px] bg-white flex items-center px-4 md:px-5 gap-3 md:gap-5 rounded-md shadow-md hover:bg-slate-50"
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
      {/* Search Results */}
      {input && (
        <div className="absolute top-[85px] left-1/2 transform -translate-x-1/2 w-[80%] md:w-[60%] bg-white shadow-lg max-h-60 overflow-y-auto rounded-md z-50">
          {cate.length > 0 ? (
            cate.map((item) => (
              <div key={item.id} className="p-2 border-b hover:bg-gray-100">
                <p className="text-lg font-semibold">{item.food_name}</p>
              </div>
            ))
          ) : (
            <p className="p-4 text-center text-gray-500">
              🚫 No items available
            </p>
          )}
        </div>
      )}

      {/* Shopping Bag */}
      <div
        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative hover:bg-amber-50 cursor-pointer"
        onClick={toggleCart}>
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
          <button
            className="absolute top-5 right-7 text-black text-xl hover:text-red-500"
            onClick={() => setIsCartOpen(false)}>
            <LuUtensilsCrossed />
          </button>

          {/* Cart Items */}
          <div className="w-full mt-8 flex flex-col gap-5 overflow-auto max-h-[400px]">
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
          <div className="w-full border-t-2 border-black mt-6 flex flex-col gap-4 p-8 items-center">
            <div className="w-full flex justify-between ">
              <span className="text-lg text-black font-semibold">Subtotal</span>
              <span className="text-green-400 font-semibold text-lg">
                Tk {subTotal}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-black font-semibold">
                Delivery Fee
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Tk {deliveryFee}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-black font-semibold">Taxes</span>
              <span className="text-green-400 font-semibold text-lg">
                Tk {taxes}/-
              </span>
            </div>
          </div>
          <div className="w-full border-t-2 border-black mt-6 flex justify-between gap-4 p-8">
            <span className="text-2xl text-black font-bold">Total</span>
            <span className="text-green-400 font-semibold text-lg">
              Tk {total}/-
            </span>
          </div>
          <button
            className="w-full p-3 bg-green-300 rounded-lg text-black hover:bg-green-400 transition-all font-bold"
            onClick={() => {
              if (cartItems.length > 0) {
                toast.success("✅ Order Placed Successfully!", {
                  position: "top-right",
                  autoClose: 3000,
                });
              } else {
                toast.warn("⚠️ Your cart is empty!", {
                  position: "top-right",
                  autoClose: 3000,
                });
              }
            }}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
