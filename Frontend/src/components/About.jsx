import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12 lg:h-80">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-4 text-2xl font-bold text-[#041D4C] md:mb-6 lg:text-6xl">
            About <br></br>Us . . .
          </h2>

          <p class="max-w-screen-md text-black-500 md:text-xl">
            The road to financial security starts with a financial advisor who
            cares about your journey. Financial success is about having a plan,
            staying disciplined, and making informed decisions
          </p>
        </div>
      </div>

      <div class="bg-white sm:pb-8 lg:pb-12">
        <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-wrap justify-between">
            <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-6 lg:pt-12">
              <h1 class="mb-4 text-4xl font-bold text-[#041D4C] sm:text-5xl md:mb-8 md:text-6xl">
                Our Story
              </h1>

              <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                Bangalore is called the garden city for its lush greenery, and
                it was also home to retired people. As kids in the same
                neighbourhood in south Bangalore we grew up with grandparents
                who always spoke about saving, investing and different ways to
                achieve financial independence.
              </p>
              <div class="mt-12">
                <Link
                  to="/aboutus"
                  class="inline-block rounded-lg bg-[#041D4C] text-white hover:text-black px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div class="mb-12 flex w-full h-96 md:mb-16 lg:w-2/3">
              <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img
                  src="https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/1432fedb88c0d1cc56f4c496a80f251c.jpg"
                  loading="lazy"
                  alt="Photo by Kaung Htet"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://www.businessinsider.in/photo/51525598.cms"
                  loading="lazy"
                  alt="Photo by Manny Moreno"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div class="flex h-24 w-96 divide-x overflow-hidden rounded-lg border">
              <a
                href="#"
                class="flex w-1/2 p-8 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                20 years of Experience
              </a>
              <a
                href="#"
                class="flex w-1/2 p-8 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                35 Team Memebers
              </a>
            </div>
          </div>
        </section>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-5xl">
            What our users said
          </h2>

          <div class="grid gap-4 md:grid-cols-2 md:gap-8">
            <div class="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6">
              <div class="max-w-md text-center text-white lg:text-lg">
                I would have rated excellent if there was an icon for it. Easy
                seamless process.. I didn’t have to take the hassle of posting
                my KYC change information by Post which is time-saving. Thank
                You. I appreciate it.
              </div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div>
                  <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    John McCulling
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6">
              <div class="max-w-md text-center text-white lg:text-lg">
              I would have rated excellent if there was an icon for it. Easy
                seamless process.. I didn’t have to take the hassle of posting
                my KYC change information by Post which is time-saving. Thank
                You. I appreciate it.
              </div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div>
                  <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    Kate Berg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
