import React from "react";

const CustomersCard = ({ customer }) => {
  console.log(customer);
  return (
    <section
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="flex flex-col justify-center p-6 max-w-xs text-black bg-gray-100 rounded-xl shadow-lg sm:px-12">
        <img
          src={customer?.image}
          alt=""
          className="mx-auto w-44 h-44 rounded dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {customer?.name}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersCard;
