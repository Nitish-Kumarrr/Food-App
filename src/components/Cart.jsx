import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalAmount = cartItems.reduce(
    (totAmount, item) => totAmount + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full md:w-[20vw] h-full p-5 bg-white tansition-all duration-500 z-50 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
            onClick={() => setActiveCart(false)}
          />
        </div>
        {cartItems.length ? (
          <ItemCard cartItems={cartItems} />
        ) : (
          <h2 className="text-2xl font-bold text-center">Your Cart is Empty</h2>
        )}
        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items :{totalQty} </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalAmount}
          </h3>
          <hr className="w-[90vw] md:w-[18vw] my-2" />
          <button
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[18vw] mb-5"
            onClick={() => navigate("/success")}
          >
            Place Order
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(true)}
        className={`rounded-full text-5xl p-3 bg-white fixed bottom-10 right-3 shadow-md ${
          totalQty && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
