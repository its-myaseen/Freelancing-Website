import React, { forwardRef } from "react";

const ServiceCard = forwardRef(({ data, id }, ref) => {
  return (
    <div
      ref={ref}
      className="service-card relative bg-[#0f1929] p-6 rounded-2xl w-72 h-64 text-white"
    >
      <div className="icon mb-4">{data.icon}</div>
      <h2 className="text-lg font-semibold">{data.heading}</h2>
      <p className="text-sm mt-2 opacity-70">{data.aboutService}</p>
    </div>
  );
});

export default ServiceCard;
