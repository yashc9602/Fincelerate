import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Fincelerate Final logo.png';

export default function Footer() {
  return (
    <div className="footer-gradient">
      <div className="bg-gradient-to-t from-[#013DB3] to-[#011C54] pt-4 sm:pt-10 lg:pt-12">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8 text-white">
          <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">
                <a href="/" className="inline-flex items-center gap-2 text-xl font-bold md:text-2xl" aria-label="logo">
                  <img src={logo} alt="Fincelerate" className="h-36 w-auto" />
                </a>
              </div>

              <p className="mb-6 sm:pr-8 ">(FORMERLY KNOWN AS “FINCELERATE SOLUTIONS PRIVATE LIMITED”)</p>

              <div className="flex gap-4">
                <a href="http://instagram.com/fincelerate/" target="_blank" className="transition duration-100 hover:text-gray-300 active:text-gray-400">
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a href="http://twitter.com/fincelerate" target="_blank" className="transition duration-100 hover:text-gray-300 active:text-gray-400">
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a href="http://linkedin.com/company/fincelerate/" target="_blank" className="transition duration-100 hover:text-gray-300 active:text-gray-400">
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a href="https://www.youtube.com/channel/UCai27NDWcveRsUVSm5uxsUw" target="_blank" className="transition duration-100 hover:text-gray-300 active:text-gray-400">
                  <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest">Legal</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link to="/privacy" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Privacy policy</Link>
                </div>

                <div>
                  <Link to="/terms" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Terms of Service</Link>
                </div>

                <div>
                  <a href="#" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Frequently Asked Questions</a>
                </div>
              </nav>
            </div>

            

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest">Work Hours</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="transition duration-100 hover:text-gray-300 active:text-gray-400">8:30 AM - 8 PM</a>
                </div>

                <div>
                  <a href="#" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Monday - Saturday</a>
                </div>

                <div>
                  <a href="#" className="transition duration-100 hover:text-gray-300 active:text-gray-400">+91-9611248691</a>
                </div>
              </nav>
            </div>
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest">Resources</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link to="/goals" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Goals</Link>
                </div>

                <div>
                  <Link to="/calculators" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Calculators</Link>
                </div>
                <div>
                  <Link to="/eyourself" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Educate Yourself</Link>
                </div>

              </nav>
            </div>
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest">Company</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="about" className="transition duration-100 hover:text-gray-300 active:text-gray-400">About</a>
                </div>

                <div>
                  <a href="/contactus" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Contact</a>
                </div>

                <div>
                  <a href="/blogs" className="transition duration-100 hover:text-gray-300 active:text-gray-400">Blog</a>
                </div>
              </nav>
            </div>
          </div>

          <div className="border-t py-8 text-center text-sm text-gray-400">
            <p className="mt-4">Mutual Fund distributor with AMFI Registration number ARN: 189716</p>
            <p className="mt-4">Fincelerate Private Limited CIN number: U66301KA2023PTC175585</p>
            <p className="mt-4">Registered Office: 259, 14th Main, 27th Cross, Banashankari 2nd stage, Bengaluru, Karnataka 560070</p>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p className="mt-4">Disclaimer: Mutual fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund, or designing a portfolio that suits your needs.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
