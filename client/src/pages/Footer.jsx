import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" ml-14  text-[#111A3A]">
      <div className="max-w-[1200px]  m-10 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30">

          {/* LEFT SIDE */}
          <div className="lg:col-span-1">

            <p className="text-smtext-[#111A3A] text-3xl font-extrabold mb-2">
              Eventora
            </p>

            <h2 className="text-4xl text-[#111A3A] md:text-4xl font-bold leading-tight">
              Create
              <br />
              unforgettable
              <br />
              events.
            </h2>

            <p className="text-[#111A3A] text-sm mt-2 leading-6 max-w-sm">
              Create, manage and discover events with Eventora. 
              
              everything you need for your event is in one place.
            </p>

            {/* Newsletter */}
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-lg text-black outline-none w-full border-2 border-gray-500 sm:w-56"
                />

                <button className="bg-[#111A3A]  text-[#c3cbe6] font-semibold px-5 py-3 rounded-lg hover:text-red-800  transition">
                  Subscribe
                </button>
              </div>
            </div>

          </div>


          {/* COLUMN 1 — EVENTS */}
          <div>
            <h3 className="font-bold text-[#020613] text-base mb-4">
              Events
            </h3>

            <ul className="space-y-2 text-sm text-[#111A3A]">

              <li>
                <Link
                  to="/create-event"
                  className="hover:text-red-800 font-semibold transition"
                >
                  Create Event
                </Link>
              </li>

              <li>
                <Link
                  to="/manage-events"
                  className="hover:text-red-800 font-semibold transition"
                >
                  Manage Events
                </Link>
              </li>

              <li>
                <Link
                  to="/my-events"
                  className="hover:text-red-800 font-semibold transition"
                >
                  My Events
                </Link>
              </li>

              <li>
                <Link
                  to="/event-calendar"
                  className="hover:text-red-800 font-semibold transition"
                >
                  Event Calendar
                </Link>
              </li>

              <li>
                <Link
                  to="/upcoming-events"
                  className="hover:text-red-800 font-semibold transition"
                >
                  Upcoming Events
                </Link>
              </li>

            </ul>
          </div>


          {/* COLUMN 2 — SERVICES */}
          <div>
            <h3 className="font-bold text-[#111A3A]  text-base mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">

              <li>
                <Link
                  to="/venue-booking"
                  className="text-[#111A3A]   hover:text-red-800  font-semibold transition"
                >
                  Venue Booking
                </Link>
              </li>

              <li>
                <Link
                  to="/event-tickets"
                  className="text-[#111A3A] hover:text-red-800 font-semibold transition"
                >
                  Event Tickets
                </Link>
              </li>

              <li>
                <Link
                  to="/guest-management"
                  className="text-[#111A3A]   hover:text-red-800 font-semibold transition"
                >
                  Guest Management
                </Link>
              </li>

              <li>
                <Link
                  to="/wedding-events"
                  className="text-[#111A3A]   hover:text-red-800 font-semibold transition"
                >
                  Wedding Events
                </Link>
              </li>

              <li>
                <Link
                  to="/corporate-events"
                  className="text-[#111A3A]   hover:text-red-800 font-semibold transition"
                >
                  Corporate Events
                </Link>
              </li>

            </ul>
          </div>


          {/* COLUMN 3 — EVENTORA */}
          <div>
            <h3 className="font-bold text-base text-[#111A3A] mb-4">
              Eventora
            </h3>

            <ul className="space-y-2 text-sm text-[#111A3A]">

              <li>
                <Link
                  to="/about"
                  className="text-[#111A3A]   hover:text-red-800 font-semibold transition"
                >
                  About Eventora
                </Link>
              </li>

              <li>
                <Link
                  to="/how-it-works"
                  className="text-[#111A3A]  hover:text-red-800 font-semibold transition"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#111A3A]   hover:text-red-800 font-semibold transition"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="text-[#111A3A]   hover:text-red-800 font-semibold transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-[#111A3A]   hover:text-red-800 font-semibold transition"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>

        </div>


        <div className="mt-4">
          <h2 className="font-bold">Contact info</h2>
          <h1 className="font-semibold  ">Phone: +91 888888888888 <br />
             Phone: +91 4444444555555 <br />
            Email: info@eventora.com
            </h1>
        </div>


        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-4  flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-800 text-[14px] font-semibold">
            © 2026 Eventora. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-300">

            <a
              href="#"
              className="text-[#111A3A]   hover:text-red-800 font-bold transition"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/__shahid_001?igsi=MWgxN2w1em1teXB6Yw=="
              className="text-[#111A3A]   hover:text-red-800 font-bold transition"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/shahid-ali-653966424?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="text-[#111A3A]   hover:text-red-800 font-bold transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;