import React from "react";
import book1 from "../../assets/image/book1.jpg";
import book2 from "../../assets/image/book2.jpg";
import book4 from "../../assets/image/book4.jpg";

const Banner = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl mr-1">We buy<span className="text-orange-400 ml-1"> book</span></h1>
      <p className="text-3xl mt-2">because we believe we're buying the time read them</p>
      
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={book1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  );
};

export default Banner;


// <h1 className="text-5xl font-bold">We buy book </h1>