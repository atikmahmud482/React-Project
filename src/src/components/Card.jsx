import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi"; // Import the missing icon
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";

const Card = ({ name, image, id, price, type }) => {
  let dispatch = useDispatch();

  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 transition-normal">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg text-green-500 font-bold">Tk {price}/-</div>
        <div className="flex justify-center items-center gap-2 text-lg font-semibold">
          {/* Conditional Rendering of Icon */}
          {type === "veg" ? (
            <LuLeafyGreen className="text-green-500" />
          ) : (
            <GiChickenOven className="text-green-500" />
          )}
          <span
            className={type === "veg" ? "text-green-500" : "text-green-500"}>
            {type}
          </span>
        </div>
      </div>
      <button
        className="w-full p-3 bg-green-300 rounded-lg text-black hover:bg-green-400 transition-all font-bold"
        onClick={() =>
          dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          )
        }>
        Add to dish
      </button>
    </div>
  );
};

export default Card;
