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
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <img
          src={customer?.image}
          alt=""
          className="w-44 h-44 mx-auto  dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {customer?.name}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">
              {customer?.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersCard;
