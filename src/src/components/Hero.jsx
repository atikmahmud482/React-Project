// Import images if they're in the 'src' folder
import image1 from "../assets/hero-image/AdobeStock_476572792_Preview.jpeg";
import image2 from "../assets/hero-image/Food-Facebook-Cover-Banner-17.jpg";
import image3 from "../assets/hero-image/food_facebook_cover_38.jpg";
import { Swiper, SwiperSlide } from "swiper/react"; // Don't forget to import Swiper and SwiperSlide
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css"; // Import Swiper CSS for styling

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] bg-gray-800">
      {/* Hero Background */}
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500, // Time interval between slides (in ms)
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Add the Autoplay module here
        className="absolute top-0 left-0 w-full h-full">
        {/* Swiper Slides with Images */}
        <SwiperSlide>
          <img
            src={image1}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Welcome to Our Service
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          We provide the best services for you with quality and care.
        </p>
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
