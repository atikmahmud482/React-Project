import Categories from "../Category";
import Card from "../components/Card";
import Nav from "../components/nav";
import { food_items } from "../food";
import Hero from "../components/Hero"; // Import Hero Section

const Home = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen relative">
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <div className="p-4 mt-[100px] sm:mt-[150px] md:mt-[200px]">
        {/* Grid for small screens, flex for medium & large */}
        <div className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:justify-center md:gap-6">
          {Categories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-3 
                         w-full sm:w-auto md:w-24 lg:w-28 h-24 flex flex-col items-center justify-center 
                         hover:shadow-lg transition-shadow duration-300 cursor-pointer 
                         text-center hover:bg-green-200">
              {/* Category Icon */}
              <div className="text-3xl sm:text-4xl">{item.image}</div>

              {/* Category Name */}
              <div className="mt-1 text-xs sm:text-sm font-bold">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {food_items.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
