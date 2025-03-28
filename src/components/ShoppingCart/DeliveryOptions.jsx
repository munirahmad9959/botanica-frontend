import { useState } from "react";

const DeliveryOptions = () => {
  const [selected, setSelected] = useState("delivery");

  return (
    <div className="flex gap-4 mb-6" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <button
        className={`flex-1 p-4 border rounded-lg flex items-center gap-2 font-medium cursor-pointer ${selected === "delivery" ? "border-2 border-gray-700" : "border-2 border-gray-300"}`}
        onClick={() => setSelected("delivery")}
      >
        <img src="./resources/delivery.png" alt="delivery" className="bg-[#ebf7f0] rounded-full p-2" />
        <div className="content flex flex-col">
          <span className="text-base font-medium text-left">Delivery</span>
          <span className="text-sm font-light">All products are available</span>
        </div>
      </button>
      <button
        className={`flex-1 p-4 border rounded-lg flex items-center gap-2 font-medium cursor-pointer ${selected === "pickup" ? "border-2 border-gray-700" : "border-2 border-gray-300"}`}
        onClick={() => setSelected("pickup")}
      >
        <img src="./resources/pickup.png" alt="pickup" className="bg-[#ebf7f0] rounded-full p-2" />

        <div className="content flex flex-col">
          <span className="text-base font-medium text-left">Pickup</span>
          <span className="text-sm font-light">All products are available</span>
        </div>
      </button>
    </div>
  );
};

export default DeliveryOptions;
