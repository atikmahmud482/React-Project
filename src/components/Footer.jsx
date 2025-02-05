import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

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
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-green-400">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
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
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
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
            <p className="text-gray-400 text-sm">📍 Dhaka, Bangladesh</p>
            <p className="text-gray-400 text-sm">
              Gmail: atikmahmud482@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-6 pt-4">
          © {new Date().getFullYear()} Foodie Delight. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
