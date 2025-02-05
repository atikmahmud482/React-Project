import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext, useEffect } from "react";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

const Nav = () => {
  let { input, setInput, cate, setCate } = useContext(dataContext);

  useEffect(() => {
    if (input === "") {
      setCate(food_items); // Show all items if input is empty
    } else {
      let newList = food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setCate(newList);
    }
  }, [input]);

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
      <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative hover:bg-amber-50">
        <span className="absolute top-0 right-1 md:right-2 text-green-500 font-bold text-sm md:text-base">
          0
        </span>
        <LuShoppingBag className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] text-green-500" />
      </div>
    </div>
  );
};

export default Nav;
