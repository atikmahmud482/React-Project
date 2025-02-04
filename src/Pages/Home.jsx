import Categories from "../Category";
import Nav from "../components/nav";

const Home = () => {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="overflow-x-auto whitespace-nowrap p-4">
        <div className="flex gap-15 justify-center">
          {Categories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-3 w-30 h-30 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center hover:bg-green-200">
              <div className="text-4xl">{item.image}</div>
              <div className="mt-2 text-sm font-semibold">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
