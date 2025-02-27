import { TiThSmallOutline } from "react-icons/ti";

import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { TbSoup } from "react-icons/tb";

const Categories = [
  {
    id: 1,
    name: "All",
    image: (
      <TiThSmallOutline className="w-[60px] h-[60px] text-green-500"></TiThSmallOutline>
    ),
  },
  {
    id: 2,
    name: "Breakfast",
    image: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500"></MdOutlineFreeBreakfast>
    ),
  },
  {
    id: 3,
    name: "Soups",
    image: <TbSoup className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 4,
    name: "Pasta",
    image: (
      <CiBowlNoodles className="w-[60px] h-[60px] text-green-500"></CiBowlNoodles>
    ),
  },
  {
    id: 5,
    name: "Main-Course",
    image: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 6,
    name: "Pizza",
    image: <GiFullPizza className="w-[60px] h-[60px] text-green-500" />,
  },
  {
    id: 7,
    name: "Burger",
    image: <GiHamburger className="w-[60px] h-[60px] text-green-500" />,
  },
];

export default Categories;
