import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AboutUs1 from "./About1";
import useScrollToTop from "./useScrollToTop";

export default function About() {
  useScrollToTop();
  const [showModal, setShowModal] = useState(false);

  const handleLearnMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/3 mb-6 flex flex-col justify-center sm:mb-12 lg:mb-0 lg:pb-6 lg:pt-12">
              <h2 className="text-4xl font-bold text-[#041D4C] mb-4 sm:text-5xl md:text-6xl">
                Welcome to <br /> Fincelerate
              </h2>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-24">
              <p className="text-lg leading-relaxed text-gray-500">
                At Fincelerate, we're dedicated to enhancing your financial health through innovative resources. Whether you're assessing your current financial state, planning investments, or striving to achieve specific goals, our team of financial experts—comprising both human experts and advanced AI—stands ready to assist you. Dive into the world of finance through our engaging podcasts, webinars, and educational content, designed to empower you with the knowledge and discipline needed for financial success.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/3 mb-6 flex flex-col justify-center sm:mb-12 lg:mb-0 lg:pb-6 lg:pt-12">
              <h1 className="mb-4 text-4xl font-bold text-[#041D4C] sm:text-5xl md:text-6xl">
                Our Story
              </h1>
              <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                Bangalore is called the garden city for its lush greenery, and it was also home to retired people. As kids in the same neighbourhood in south Bangalore we grew up with grandparents who always spoke about saving, investing and different ways to achieve financial independence.
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
            <div className="w-full lg:w-2/3 mb-12 flex h-96 md:mb-16">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img
                  src="https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/1432fedb88c0d1cc56f4c496a80f251c.jpg"
                  loading="lazy"
                  alt="Photo by Kaung Htet"
                  className="h-full w-full object-cover object-center rounded-lg"
                />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://www.businessinsider.in/photo/51525598.cms"
                  loading="lazy"
                  alt="Photo by Manny Moreno"
                  className="h-full w-full object-cover object-center rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#041D4C] mb-4">Our Mission Statement</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-[#041D4C] mb-4">Learn</h3>
              <p className="text-lg text-gray-500">Empower yourself with financial knowledge through our resources.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-[#041D4C] mb-4">Teach</h3>
              <p className="text-lg text-gray-500">Our financial experts provide valuable insights to help you succeed financially.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-[#041D4C] mb-4">Reach</h3>
              <p className=" text-lg text-gray-500">Achieve your financial goals with our strategic planning.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-[#041D4C] mb-4">Accelerate</h3>
              <p className="text-lg text-gray-500">Boost your financial growth with our innovative solutions.</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-12 mt-24">
            <h2 className="text-4xl font-semibold text-[#041D4C] mb-4 w-full lg:w-1/2 text-center">What We Do?</h2>
            <p className="text-lg leading-relaxed text-gray-600 w-full lg:w-4/5 text-center">
              Our journey began with a deep-rooted fascination for wealth and investing. This passion evolved into Fincelerate, where we provide comprehensive financial services. Our aim is clear: to motivate individuals from diverse backgrounds towards financial prosperity and independence. Central to our approach is understanding the power of compounding through mutual funds, leveraging both research and seasoned expertise to unlock its benefits.
            </p>
          </div>

          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full lg:w-1/2 p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-4xl font-semibold text-[#041D4C] mb-4 text-center">Our History</h2>
                <p className="text-lg leading-relaxed text-gray-500 text-center">
                  Founded on the belief in making a meaningful difference, Fincelerate emerged as a beacon in navigating the complexities of investments. We're committed to empowering our clients with knowledge and strategies that withstand market fluctuations, ensuring sustained growth and stability.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-4xl font-semibold text-[#041D4C] mb-4 text-center">Our Values</h2>
                <p className="text-lg leading-relaxed text-gray-500 text-center">
                  At Fincelerate, we prioritize your financial growth, viewing it not just as an investment but as a legacy for future generations and a contribution to national prosperity. We place investor relationships above immediate profitability, fostering trust and long-term success.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#041D4C] mb-4">What's Next</h2>
            <p className="text-lg leading-relaxed text-gray-500">
              Our journey at Fincelerate is a dynamic one, constantly evolving to meet the ever-changing landscape of finance. Stay connected with us as we continue to innovate and grow, ensuring that our commitment to your financial empowerment remains steadfast.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800 md:mb-12 lg:text-5xl">
            What our users said
          </h2>

          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-[#000D48] px-8 py-6 md:gap-6">
              <div className="max-w-md text-center text-white lg:text-lg">
                I would have rated excellent if there was an icon for it. Easy seamless process.. I didn’t have to take the hassle of posting my KYC change information by Post which is time-saving. Thank You. I appreciate it.
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
                I would have rated excellent if there was an icon for it. Easy seamless process.. I didn’t have to take the hassle of posting my KYC change information by Post which is time-saving. Thank You. I appreciate it.
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
