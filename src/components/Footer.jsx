import { Link } from "react-router-dom";
import { BsInstagram, BsTwitterX, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="  border-t border-slate-600 mt-24 bg-slate-50">
      <div className=" max-w-[1200px] mx-auto py-8">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/">
              <div className="flex font-semibold font-serif text-3xl">
                <IoMdHome className="text-red-600" />
                <span className=" text-red-500">Vista</span>
                <span>gate</span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
            <div className="mt-2 sm:mt-0">
              <h3 className="font-semibold text-gray-700 text-lg">About</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Vistagate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">Follow us</h3>
              <ul className="mt-2 space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 text-lg">Legal</h3>
              <ul className="mt-2 space-y-3">
                <li>
                  <Link
                    to="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold">Vistagate</span>. All rights
            reserved.
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <a
              href="https://www.linkedin.com/in/raghav-goel-rg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <BsInstagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <BsTwitterX size={20} />
            </a>
            <a
              href="https://github.com/raghavG0212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <BsGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
