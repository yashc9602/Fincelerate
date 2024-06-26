import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import localImage from "../assets/images/home_Mobile.jpg";
import hero from "../assets/images/home_hero.jpg";
import carousel1 from "../assets/images/home_carousel_1.jpg";
import CustomCarousel from "./Carousel";

export default function Home() {
  return (
    <div>
      <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div class="flex flex-col justify-between xl:w-5/12">
              <div></div>

              <div class="sm:text-center lg:py-12 lg:text-left xl:py-24">
                <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                  Accelerate your Financials . . .{" "}
                </h1>

                <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="#"
                    class="inline-block rounded-lg bg-[#041D4C] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-200 hover:text-black focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    Invest
                  </Link>

                  <Link
                    to="/contact"
                    class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>

              <div class="mt-8 flex items-center justify-center gap-4 sm:mt-16 lg:justify-start">
                <span class="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                  Social
                </span>
                <span class="h-px w-12 bg-gray-200"></span>

                <div class="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="h-48 overflow-hidden rounded-lg bg-gray-200 h-screen shadow-lg xl:w-5/12">
              <img
                src={hero}
                loading="lazy"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
      <CustomCarousel />

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col overflow-hidden rounded-lg bg-[#041D4C] sm:flex-row md:h-96">
            <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-1/2">
              <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-xl">
                About Fincelerate
              </h2>
              <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-3xl">
                Fincelerate was developed by a team of experienced financial
                planners and technology experts.
              </h2>
            </div>
            <div class="order-start h-48 w-full bg-[#041D4C] sm:order-none sm:h-auto sm:w-1/2 lg:w-1/2">
              <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-96">
                <p class="mb-8 max-w-md text-gray-100">
                  Our services include comprehensive financial planning,
                  investment management, retirement planning, tax planning, and
                  more. We provide customized solutions that cater to your
                  unique needs and financial objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-96">
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-1/2">
              <img
                src={localImage}
                loading="lazy"
                alt="Local Image"
                className="h-full w-full object-contain object-center bg-white"
              />
            </div>

            <div class="flex w-full bg-white flex-col p-4 sm:w-1/2 sm:p-8 lg:w-1/2">
              <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                Smart, simple <br /> financial planner.
              </h2>

              <p class="mb-8 max-w-md text-gray-900 text-lg">
                Whether you’re looking to plan for retirement, save for your
                child’s education, or invest in your future, we have the
                expertise and tools to help you succeed.
              </p>
              <p class="mb-4">
                Comprehensive Financial Planning <br />
                Personalized Approach <br />
                Investment Management <br />
              </p>

              <div class="mt-auto">
                <a
                  href="#"
                  class="inline-block rounded-lg bg-[#041D4C] text-white hover:text-black px-8 py-3 text-center text-sm font-semibold  outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
