import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col md:flex-row md:justify-between py-3 mx-6 mb-10">
      <div className="my-2">
        <h3 className="text-gray-600 font-bold text-xl ">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Country's Food Delight</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="search here"
          name="search"
          autoComplete="false"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 shadow-md border-gray-200 w-full md:w-[25vw] rounded-lg outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;
