import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl hover:bg-slate-50">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        className="w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md hover:bg-slate-50"
        action="">
        <IoSearch className="text-green-500 w-[25px] h-[25px]" />
        <input
          type="text"
          placeholder="Search Item..."
          className=" w-[100%] outline-none text-[20px]"></input>
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative hover:bg-amber-50">
        <span className="absolute top-0 right-2 text-green-500 font-bold">
          0
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500 hover:bg-slate-50" />
      </div>
    </div>
  );
};

export default Nav;
