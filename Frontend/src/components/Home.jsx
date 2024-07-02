import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactForm from "./Contact";
import Calendly from "./Appointment";
import CustomCarousel from "./Carousel";
import localImage from "../assets/images/home_Mobile.jpg";
import hero from "../assets/images/hero.jpeg";
import useScrollToTop from "./useScrollToTop";

const Home = () => {
  const [activeTab, setActiveTab] = useState("query");
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNotificationClick = () => {
    navigate("/contactus");
    useScrollToTop();
  };

  return (
    <div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-between xl:w-5/12">
              <div className="sm:text-center lg:py-12 lg:text-left xl:py-12 mt-24">
                <h1 className="mb-24 text-4xl font-bold text-black sm:text-xl md:mb-12 md:text-5xl mb-24 ">
                  Accelerate your <br /> Financials . . .
                </h1>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    to="/contactus"
                    className="inline-block rounded-lg bg-[#041D4C] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-200 hover:text-black focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    Invest
                  </Link>

                  <Link
                    to="/contactus"
                    className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>

            <div
  className="bg-white hidden lg:block xl:w-7/12 rounded-lg"
  style={{ height: "75vh" }}
>
  <img
    src={hero}
    loading="lazy"
    className="h-full w-full object-cover object-center rounded-lg"
  />
</div>


          </section>
        </div>
      </div>
      <CustomCarousel />

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-[#041D4C] sm:flex-row md:h-96">
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-1/2">
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-xl">
                About <span className="text-yellow-500">Fincelerate</span>
              </h2>
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-3xl">
                <span className="text-yellow-500">Fincelerate</span> was
                developed by a team of experienced financial planners and
                technology experts.
              </h2>
            </div>
            <div className="order-start h-48 w-full bg-[#041D4C] sm:order-none sm:h-auto sm:w-1/2 lg:w-1/2">
              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-96">
                <p className="mb-8 max-w-md text-gray-100">
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

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-96">
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-1/2">
              <img
                src={localImage}
                loading="lazy"
                alt="Local Image"
                className="h-full w-full object-contain object-center bg-white"
              />
            </div>

            <div className="flex w-full bg-white flex-col p-4 sm:w-1/2 sm:p-8 lg:w-1/2">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                Smart, simple <br /> financial planner.
              </h2>

              <p className="mb-8 max-w-md text-gray-900 text-lg">
                Whether you’re looking to plan for retirement, save for your
                child’s education, or invest in your future, we have the
                expertise and tools to help you succeed.
              </p>
              <p className="mb-4 font-bold">
                Comprehensive Financial Planning <br />
                Personalized Approach <br />
                Investment Management <br />
              </p>

              <div className="mt-auto">
                <Link
                  to="/contactus"
                  className="inline-block rounded-lg bg-[#041D4C] text-white hover:text-black px-8 py-3 text-center text-sm font-semibold  outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-[#041D4C] text-white rounded-full px-4 py-2 shadow-lg cursor-pointer flex items-center" onClick={handleNotificationClick}>
          <div className="mr-2 w-2 h-2 bg-red-500 rounded-full"></div>
          Get in touch with us
        </div>
      )}
    </div>
  );
};

export default Home;
