import Lottie from "lottie-react";
import React from "react";
import animation from "../../banner.json";
import Typewriter from "typewriter-effect";
import AnimatedText from "react-animated-text-content";

const Banner = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none sm:text-6xl mr-1">
            We buy
            <span className="text-orange-400 ml-1">
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
				  loop: true
                }}
                animationType="float"
                interval={0.06}
                duration={0.8}
                tag="span"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
				// loop={true}
              >
                book
              </AnimatedText>
            </span>
          </h1>
          <p className="text-sm md:text-lg sm:text-3xl mt-4">
            <Typewriter
              options={{
                strings: ["because we believe we're buying the time read them"],
                autoStart: true,
				delay: 35,
                loop: true,
              }}
            />
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 ">
          {/* <img src={book1} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
          <Lottie className="md:w-72" animationData={animation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;

// <h1 className="text-5xl font-bold">We buy book </h1>
