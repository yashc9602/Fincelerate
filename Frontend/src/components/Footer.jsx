import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Fincelerate Final logo.png';
import twitterLogo from '../assets/images/logo-white.png'; // Import the local Twitter logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

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
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                <a href="http://twitter.com/fincelerate" target="_blank" className="transition duration-100 hover:text-gray-300 active:text-gray-400">
                  <img src={twitterLogo} alt="Twitter" className="h-6 w-6" />
                </a>

                <a href="http://linkedin.com/company/fincelerate/" target="_blank" className="transition duration-100 hover:text-gray-300 active:text-gray-400">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>

                <a href="https://www.youtube.com/channel/UCai27NDWcveRsUVSm5uxsUw" target="_blank" className="transition duration-100 hover:text-gray-300 active:text-gray-400">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>

                <a href="https://facebook.com/fincelerate" target="_blank" className="transition duration-100 hover:text-gray-300 active:text-gray-400">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
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
