import { useDispatch } from "react-redux";
import { IncreaseQty, DecreaseQty, RemoveItem } from "../redux/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";

const Card2 = ({ id, name, price, image, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded" />
      <div className="flex flex-col flex-1 ml-4">
        <h3 className="text-lg font-semibold">{name}</h3>

        {/* Updated price display */}
        <p className="text-green-500 font-bold">
          Tk {price * qty}/-{" "}
          <span className="text-gray-500 text-sm">(Tk {price} each)</span>
        </p>

        <div className="flex items-center gap-3 mt-2">
          <button
            className="bg-red-400 text-white px-2 py-1 rounded"
            onClick={() => dispatch(DecreaseQty(id))}>
            -
          </button>
          <span className="text-lg font-semibold">{qty}</span>
          <button
            className="bg-green-400 text-white px-2 py-1 rounded"
            onClick={() => dispatch(IncreaseQty(id))}>
            +
          </button>
        </div>
      </div>
      <button
        className="text-red-600 text-2xl px-2 py-1 rounded"
        onClick={() => {
          dispatch(RemoveItem(id));
          toast.error(`❌ Removed ${name} from cart`, {
            position: "top-right",
            autoClose: 2000,
          });
        }}>
        <RiDeleteBin5Line />
      </button>
    </div>
  );
};

export default Card2;
