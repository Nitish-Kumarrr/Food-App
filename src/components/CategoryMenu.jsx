import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodData from "../food data/FoodData";
import { setCategory } from "../redux/slices/CategorySlice";
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-bold">Find Your best Food</h3>
      <div className="flex gap-4  my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          className={`py-2 px-3 shadow-md bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
          onClick={() => dispatch(setCategory("All"))}
        >
          All
        </button>
        {categories.map((category, ind) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={ind}
            className={`py-2 px-3 shadow-md bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === category && "bg-green-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
