import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import AboutUs1 from "./About1";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  const handleLearnMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 lg:h-80">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-2xl font-bold text-[#041D4C] md:mb-6 lg:text-6xl">
            About <br />Us . . .
          </h2>
          <p className="max-w-screen-md text-black-500 md:text-xl">
            The road to financial security starts with a financial advisor who
            cares about your journey. Financial success is about having a plan,
            staying disciplined, and making informed decisions
          </p>
        </div>
      </div>

      <div className="bg-white sm:pb-8 lg:pb-12">
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-6 lg:pt-12">
              <h1 className="mb-4 text-4xl font-bold text-[#041D4C] sm:text-5xl md:mb-8 md:text-6xl">
                Our Story
              </h1>
              <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                Bangalore is called the garden city for its lush greenery, and
                it was also home to retired people. As kids in the same
                neighbourhood in south Bangalore we grew up with grandparents
                who always spoke about saving, investing and different ways to
                achieve financial independence.
              </p>
              <div className="mt-12">
                <button
                  onClick={handleLearnMoreClick}
                  className="inline-block rounded-lg bg-[#041D4C] text-white hover:text-black px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="mb-12 flex w-full h-96 md:mb-16 lg:w-2/3">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img
                  src="https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/1432fedb88c0d1cc56f4c496a80f251c.jpg"
                  loading="lazy"
                  alt="Photo by Kaung Htet"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://www.businessinsider.in/photo/51525598.cms"
                  loading="lazy"
                  alt="Photo by Manny Moreno"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row"></div>
        </section>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-5xl">
            What our users said
          </h2>

          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-[#000D48] px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                I would have rated excellent if there was an icon for it. Easy
                seamless process.. I didn’t have to take the hassle of posting
                my KYC change information by Post which is time-saving. Thank
                You. I appreciate it.
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    John McCulling
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-lg bg-[#000D48] px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                I would have rated excellent if there was an icon for it. Easy
                seamless process.. I didn’t have to take the hassle of posting
                my KYC change information by Post which is time-saving. Thank
                You. I appreciate it.
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    Kate Berg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              <AiOutlineClose size={24} />
            </button>
            <AboutUs1 />
          </div>
        </div>
      )}
    </div>
  );
}
