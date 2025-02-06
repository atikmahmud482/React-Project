import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si"; // Gmail logo import

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Logo */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-green-400">
              Foodie Delight
            </h2>
            <p className="text-gray-400 mt-2 text-sm text-center md:text-left">
              Fresh & Delicious Food, Delivered to Your Doorstep.
            </p>
            {/* Dhaka, Bangladesh moved here */}
            <p className="text-gray-400 text-sm mt-4">📍 Dhaka, Bangladesh</p>
          </div>

          {/* Quick Links and Additional Links in 2 rows - Centered */}
          <div className="flex flex-col items-center justify-center text-center md:text-center">
            <h3 className="text-xl font-semibold text-green-400">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-400">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-400">
                    About Us
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-green-400">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold text-green-400">Follow Us</h3>
            <div className="flex gap-4 mt-3">
              <a
                href="https://www.facebook.com/atikmahmud.atikmahmud.564/"
                className="text-gray-400 hover:text-green-400 text-xl">
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/atik-al-mahmud-8b6628340/"
                className="text-gray-400 hover:text-green-400 text-xl">
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/atikmahmud482?tab=overview&from=2025-02-01&to=2025-02-06"
                className="text-gray-400 hover:text-green-400 text-xl">
                <FaGithub />
              </a>
            </div>
            <p className="text-gray-400 mt-3 text-sm">📞 01785867900</p>
            <div className="flex items-center text-gray-400 text-sm mt-2">
              <SiGmail className="text-red-500 w-5 h-5 mr-2" />{" "}
              {/* Gmail logo */}
              <a
                href="mailto:atikmahmud482@gmail.com"
                className="hover:text-green-400">
                atikmahmud482@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section - Bottom */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-6 pt-4">
          © {new Date().getFullYear()} Foodie Delight. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
