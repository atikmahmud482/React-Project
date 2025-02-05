import Categories from "../Category";
import Card from "../components/Card";
import Nav from "../components/nav";
import { food_items } from "../food";
import Hero from "../components/Hero";
import { useContext, useState } from "react";
import { dataContext } from "../context/UserContext";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  let { cate, setCate } = useContext(dataContext);

  // Function to filter items by category
  function filter(category) {
    console.log("Selected Category:", category);

    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => {
        console.log(
          `Checking: ${item.food_name}, Category: ${item.food_category}`
        );
        return item.food_category.toLowerCase() === category.toLowerCase();
      });

      console.log("Filtered Items:", newList);
      setCate(newList);
    }
  }

  return (
    <div className="bg-slate-200 w-full min-h-screen relative">
      <Nav />
      <Hero />

      {/* Space for Title/Description */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold text-green-600">
          Browse Our Delicious Categories
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Explore a variety of mouth-watering dishes for every taste.
        </p>
      </div>

      {/* Categories Section */}
      <div className="p-4 mt-[50px] sm:mt-[80px] md:mt-[100px]">
        <div className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:justify-center md:gap-6">
          {Categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md p-3 
                         w-full sm:w-auto md:w-24 lg:w-28 h-24 flex flex-col items-center justify-center 
                         hover:shadow-lg transition-shadow duration-300 cursor-pointer 
                         text-center hover:bg-green-200"
              onClick={() => filter(category.name)} // Category filter click
            >
              <div className="text-3xl sm:text-4xl">{category.image}</div>
              <div className="mt-1 text-xs sm:text-sm font-bold">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {/* Food items after category filter */}
        {cate.map((food) => (
          <Card
            key={food.id}
            name={food.food_name}
            image={food.food_image}
            price={food.price}
            id={food.id}
            type={food.food_type}
          />
        ))}

        {/* Cart Items */}
      </div>
    </div>
  );
};

export default Home;
