import React from "react";
import { Link } from "react-router-dom";
import { FaBookOpen} from "react-icons/fa";
import googlelogo from "../../../assets/image/google-play-store-badge-en-removebg-preview.png";
import applogo from "../../../assets/image/app-store-badge-og-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="px-4 divide-y  text-black">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="ml-5">
          <Link
            to="/"
            className="btn btn-ghost bg-slate-300 normal-case md:text-xl text-xs font-bold"
          >
            <FaBookOpen className="text-orange-400 text-2xl mr-1" />
            <span className="text-info mr-1">THE COZY</span> LIBRARY
          </Link>
          <p className="mt-3">
            THE COZY LIBRARY is now one of the leading <br /> e-commerce
            organizations in Bangladesh
          </p>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-black md:text-xl font-medium">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="/Home">
                  Home
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="/FAQ">
                  FAQ
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-black md:text-xl font-medium">
              Informations
            </h3>
            <ul className="space-y-1">
              <li className="flex justify-start items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3327 16.6667V10.145C18.3327 9.69131 18.2401 9.24235 18.0606 8.82566C17.8811 8.40896 17.6183 8.03331 17.2885 7.72171L11.1443 1.91504C10.8349 1.62248 10.4252 1.45947 9.99935 1.45947C9.5735 1.45947 9.1638 1.62248 8.85435 1.91504L2.71018 7.72171C2.38037 8.03331 2.11764 8.40896 1.9381 8.82566C1.75855 9.24235 1.66597 9.69131 1.66602 10.145V16.6667C1.66602 17.1087 1.84161 17.5327 2.15417 17.8452C2.46673 18.1578 2.89065 18.3334 3.33268 18.3334H16.666C17.108 18.3334 17.532 18.1578 17.8445 17.8452C18.1571 17.5327 18.3327 17.1087 18.3327 16.6667Z"
                    stroke="#FCC5C0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>
                  <span>Cozy Library Building</span>
                </p>
              </li>
              <li className="flex justify-start items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66602 4.99992C1.66602 4.55789 1.84161 4.13397 2.15417 3.82141C2.46673 3.50885 2.89065 3.33325 3.33268 3.33325H16.666C17.108 3.33325 17.532 3.50885 17.8445 3.82141C18.1571 4.13397 18.3327 4.55789 18.3327 4.99992V14.9999C18.3327 15.4419 18.1571 15.8659 17.8445 16.1784C17.532 16.491 17.108 16.6666 16.666 16.6666H3.33268C2.89065 16.6666 2.46673 16.491 2.15417 16.1784C1.84161 15.8659 1.66602 15.4419 1.66602 14.9999V4.99992Z"
                    stroke="#FCC5C0"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.66602 6.66675L7.91685 11.6676C8.50792 12.1405 9.24236 12.3982 9.99935 12.3982C10.7563 12.3982 11.4908 12.1405 12.0818 11.6676L18.3327 6.66675"
                    stroke="#FCC5C0"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>
                  contact@cozylibrary.com
                </p>
              </li>
              <li className="flex justify-start items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_349_1957)">
                    <path
                      d="M8.79454 5.19994L5.97538 1.94578C5.65038 1.57078 5.05454 1.57244 4.67704 1.95078L2.35871 4.27328C1.66871 4.96411 1.47121 5.98994 1.87038 6.81244C4.25506 11.7499 8.23708 15.7375 13.1712 18.1291C13.9929 18.5283 15.0179 18.3308 15.7079 17.6399L18.0479 15.2958C18.427 14.9166 18.4279 14.3174 18.0495 13.9924L14.7829 11.1883C14.4412 10.8949 13.9104 10.9333 13.5679 11.2766L12.4312 12.4149C12.373 12.4759 12.2964 12.5161 12.2132 12.5294C12.1299 12.5426 12.0446 12.5282 11.9704 12.4883C10.1124 11.4184 8.5712 9.87513 7.50371 8.01578C7.46373 7.9414 7.44926 7.85597 7.4625 7.77257C7.47575 7.68918 7.51599 7.61244 7.57704 7.55411L8.71038 6.41994C9.05371 6.07494 9.09121 5.54161 8.79454 5.19911V5.19994Z"
                      stroke="#FCC5C0"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_349_1957">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  (001) 12312 3452
                </p>
              </li>
              <li className="flex justify-start items-start gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z"
                    stroke="#FCC5C0"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0007 1.66675C8.23254 1.66675 6.53685 2.36913 5.28661 3.61937C4.03636 4.86961 3.33398 6.5653 3.33398 8.33341C3.33398 9.91008 3.66898 10.9417 4.58398 12.0834L10.0007 18.3334L15.4173 12.0834C16.3323 10.9417 16.6673 9.91008 16.6673 8.33341C16.6673 6.5653 15.9649 4.86961 14.7147 3.61937C13.4645 2.36913 11.7688 1.66675 10.0007 1.66675V1.66675Z"
                    stroke="#FCC5C0"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>
                  Victoria Street, London, United <br /> Kingdom
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-black md:text-xl font-medium">
              Download App
            </h3>
            <div className="flex justify-start items-center">
              <img className="w-[100px]" src={googlelogo} alt="" />
              <img className="w-[107px]" src={applogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
