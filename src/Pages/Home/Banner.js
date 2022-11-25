import React from "react";
import book from '../../assets/image/book.jpg'

const Banner = () => {
  return (
    <section>
      <div className="bg-violet-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
          Outside of a dog, a book is a man's best friend
          </h1>
        </div>
      </div>
      <img
        src={book}
        alt=""
        className="w-4/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default Banner;
