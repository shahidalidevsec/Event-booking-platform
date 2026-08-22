import React from "react";
import { MapPin, Smartphone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full bg-white py-12">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-[#172b4d]">
          CONTACT US
        </h1>

        <p className="text-gray-400 text-lg mt-5">
          Our office Details
        </p>

        <div className="w-14 h-1 bg-pink-500 mx-auto mt-7"></div>
      </div>

      {/* Contact Details */}
      <div className="max-w-6xl mx-auto grid grid-cols-3">

        {/* Mumbai */}
        <div className="text-center px-8 py-7 border-r border-gray-200">
          <MapPin
            size={50}
            strokeWidth={1.8}
            className="mx-auto text-pink-500 mb-5"
          />

          <h2 className="text-lg font-bold text-[#172b4d]">
            MUMBAI
          </h2>

          <p className="text-blue-700 mt-4 leading-6">
            E703, Andheri Link Road, Andheri West, Mumbai,
            <br />
            Maharashtra 400093
          </p>
        </div>

        {/* Phone */}
        <div className="text-center px-8 py-7 border-r border-gray-200">
          <Smartphone
            size={50}
            strokeWidth={1.8}
            className="mx-auto text-pink-500 mb-5"
          />

          <h2 className="text-lg font-bold text-[#172b4d]">
            PHONE NUMBER
          </h2>

          <p className="text-blue-600 mt-4 leading-6">
            +91 65465464646
            <br />
            +91 44444444444
          </p>
        </div>

        {/* Email */}
        <div className="text-center px-8 py-7">
          <Mail
            size={50}
            strokeWidth={1.8}
            className="mx-auto text-pink-500 mb-5"
          />

          <h2 className="text-lg font-bold text-[#172b4d]">
            EMAIL
          </h2>

          <p className="text-blue-600 mt-4">
            info@eventora.com
          </p>
        </div>

        {/* Noida */}
        <div className="text-center px-8 py-7 border-r border-t border-gray-200">
          <MapPin
            size={50}
            strokeWidth={1.8}
            className="mx-auto text-pink-500 mb-5"
          />

          <h2 className="text-lg font-bold text-[#172b4d]">
            NOIDA
          </h2>

          <p className="text-blue-700 mt-4 leading-6">
            E16, Sector 3, Noida, Uttar Pradesh 201301
          </p>
        </div>

        {/* Patna */}
        <div className="text-center px-8 py-7 border-r border-t border-gray-200">
          <MapPin
            size={50}
            strokeWidth={1.8}
            className="mx-auto text-pink-500 mb-5"
          />

          <h2 className="text-lg font-bold text-[#172b4d]">
            PATNA
          </h2>

          <p className="text-blue-700 mt-4 leading-6">
            HNo. 50, Ashiyana More BMP Road, Police Nirmaan
            <br />
            Bhawan, Patna, Bihar- 800025
          </p>
        </div>

        {/* Kakinada */}
        <div className="text-center px-8 py-7 border-t border-gray-200">
          <MapPin
            size={50}
            strokeWidth={1.8}
            className="mx-auto text-pink-500 mb-5"
          />

          <h2 className="text-lg font-bold text-[#172b4d]">
            KAKINADA
          </h2>

          <p className="text-blue-700 mt-4 leading-6">
            16-7-3/1, Kavdhi Street, Peddapuram, Kakinada, Andhra
            <br />
            Pradesh, India - 533437
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;