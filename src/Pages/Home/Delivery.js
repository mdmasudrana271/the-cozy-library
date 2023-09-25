import React from "react";
import animation from "../../delivery.json";
import recevie from "../../recevie.json";
import Lottie from "lottie-react";

const Delivery = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse w-11/12 mx-auto">
      {/* <img
        src="https://source.unsplash.com/640x480/?2"
        alt=""
        className="h-80 dark:bg-gray-500 aspect-video"
      /> */}
      <figure className="lg:h-80 lg:w-80">
        <Lottie animationData={animation } loop={true} />
      </figure>

      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
        {/* <h3 className="text-3xl font-bold">
            We're not reinventing the wheel
          </h3> */}
        <p className="my-6 dark:text-orange-400 hover:scale-x-0">
          We ready to supply book for you anytime
        </p>
      </div>
      <figure className="lg:h-80 lg:w-80">
        <Lottie animationData={recevie} loop={true} />
      </figure>
    </div>
  );
};

export default Delivery;
