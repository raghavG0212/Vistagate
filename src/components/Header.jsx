import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { IoMdHome } from "react-icons/io";

export default function Header() {
  const [pageState,setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setPageState("Profile");
      }
      else{
        setPageState("Sign in");
      }
    })
  })
  function pathMatchRoute(route) {
    return route === location.pathname;
  }
  return (
    <div className="bg-slate-50 border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center p-2 max-w-[1200px] mx-auto">
        <Link to="/">
          <div className="flex font-semibold font-serif text-3xl">
            <IoMdHome className="text-red-600" />
            <span className=" text-red-500">Vista</span>
            <span >gate</span>
          </div>
        </Link>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-[17px] font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") ? "text-gray-950 border-b-red-500 " : ""
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-[17px] font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers")
                  ? "text-gray-950 border-b-red-500"
                  : ""
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-[17px] font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                  ? "text-gray-950 border-b-red-500"
                  : ""
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
