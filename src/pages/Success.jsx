import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold text-center mb-4">
            Order Successfull!
          </h2>
          <p className="text-xl">Your order has been placed Successfully</p>
        </div>
      )}
    </div>
  );
};

export default Success;
