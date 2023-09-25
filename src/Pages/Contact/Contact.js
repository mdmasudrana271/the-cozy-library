import React from "react";
import animation from '../../contact.json'
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <section>
         <h2 className="text-3xl font-semibold text-center mb-5">Contact Us</h2>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
      <figure className="h-full md:w-80">
        <Lottie animationData={animation } loop={true} />
      </figure>
      <form
        action="https://getform.io/f/923d35e5-4392-4fdd-8a69-533de3d72d65" method="POST"
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div>
          <label for="name" className="text-sm">
            Name
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required></input>
        </div>
        <div>
          <label for="email" className="text-sm">
            Email
          </label>
          <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required></input>
        </div>
        <div>
          <label for="message" className="text-sm">
            Message
          </label>
          <textarea name="message" className="textarea input-bordered w-full" placeholder="Message" required></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-orange-400 dark:text-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
