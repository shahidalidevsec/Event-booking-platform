import { useState } from "react";

const cities = [
  {
    name: "Kolkata",
    image: "https://www.eventkepers.com/assets/img/city/kolkata.webp",
  },
  {
    name: "Amritsar",
    image: "https://www.eventkepers.com/assets/img/city/golden-temple-amritsar.webp",
  },
  {
    name: "Bangalore",
    image: "https://www.eventkepers.com/assets/img/city/bangalore.webp",
  },
  {
    name: "Patna",
    image: "https://www.eventkepers.com/assets/img/city/patna-golghar.webp",
  },
  {
    name: "Kochi",
    image: "https://www.eventkepers.com/assets/img/city/kochi.webp",
  },
  {
    name: "Mysore",
    image: "https://www.eventkepers.com/assets/img/city/mysore.webp",
  },

  {
    name: "Mumbai",
    image: "https://www.eventkepers.com/assets/img/city/mumbai.jpg",
  },
  {
    name: "Delhi",
    image: "https://www.eventkepers.com/assets/img/city/delhincr.jpg",
  },
  {
    name: "Pune",
    image: "https://www.eventkepers.com/assets/img/city/patna-golghar.webp",
  },
  {
    name: "Bhuvaneswar",
    image: "https://www.eventkepers.com/assets/img/city/bhubaneswar.jpg",
  },
  {
    name: "Chennai",
    image: "https://www.eventkepers.com/assets/img/city/chennai.jpg",
  },
  {
    name: "Jaipur",
    image: "data:image/jpeg;base64,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",
  },

  {
    name: "Agara",
    image: "https://www.eventkepers.com/assets/img/city/agra.jpg",
  },
  {
    name: "Lucknow",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0F8qrdeBtOGCk7xRDAugBIkZIIoiWIZBWqSYyPNylw&s=10",
  },
  {
    name: "Surat",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDK9bX2eCDi1CsQTUIzLCIGDQ6eFfJ_le4ep0B4w1WQ&s=10",
  },
  {
    name: "Nagpur",
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Indore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf5ykIPyoDn5UJSBWKqtYDb-sbmn_jZDEoDUg41n_eg&s",
  },
  {
    name: "Bhopal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-h4hITzl3-BVznvcCXy4b0wjsA4lGpfT-GUQ3-A4B_A&s=10",
  },
];

export default function CityPresence() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [0, 1, 2];

  return (
    <section className="w-full bg-white pb-9">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[36px] font-semibold text-[#071d5c]">
          OUR CITY PRESENCE
        </h2>

        <p className="mt-3 text-[20px] text-gray-400">
          15 Countries, 195 Cities
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden px-[22px]">

        <div
          className="flex transition-transform duration-[2000ms] ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >

          {/* Slide 1 */}
          <div className="min-w-full grid grid-cols-6 gap-6">
            {cities.slice(0, 6).map((city, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[5px] border border-gray-300 bg-white shadow-sm"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-[215px] w-full object-cover"
                />

                <div className="flex h-[55px] items-center justify-center">
                  <p className="text-[17px] text-gray-700">
                    {city.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slide 2 */}
          <div className="min-w-full grid grid-cols-6 ml-6 gap-6">
            {cities.slice(6, 12).map((city, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[5px] border border-gray-300 bg-white shadow-sm"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-[215px] w-full object-cover"
                />

                <div className="flex h-[55px] items-center justify-center">
                  <p className="text-[17px] text-gray-700">
                    {city.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slide 3 */}
          <div className="min-w-full grid ml-6 c grid-cols-6 gap-6">
            {cities.slice(12, 18).map((city, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[5px] border border-gray-300 bg-white shadow-sm"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-[215px] w-full object-cover"
                />

                <div className="flex h-[55px] items-center justify-center">
                  <p className="text-[17px] text-gray-700">
                    {city.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 cursor-pointer flex justify-center gap-3">

        {slides.map((slide) => (
          <button
            key={slide}
            onClick={() => setCurrentSlide(slide)}
            className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
              currentSlide === slide
                ? "scale-125 bg-[#071d5c]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}

      </div>
    </section>
  );
}