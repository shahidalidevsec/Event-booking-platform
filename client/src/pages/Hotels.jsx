const hotels = [
  {
    name: "The Lalit Mumbai",
    location: "Andheri East, Mumbai",
    image: "https://www.eventkepers.com/assets/img/hotels/the-lalit-mumbai.webp",
  },
  {
    name: "The Taj Mahal Palace",
    location: "Colaba, Mumbai",
    image: "https://www.eventkepers.com/assets/img/hotels/the-taj-mahal-palace.webp",
  },
  {
    name: "Grand Hyatt Mumbai",
    location: "Siddharth Nagar, Mumbai",
    image: "https://www.eventkepers.com/assets/img/hotels/grand-hyatt-mumbai.webp",
  },
];

const Hotels = () => {
  return (
    <section className="w-full bg-[#f7f8ff] py-10">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-4xl font-medium text-[#071d5c]">
          HOTELS
        </h2>

        <p className="mt-3 text-[15px] italic text-black">
          Here are some nearby hotels
        </p>

        {/* Red Line */}
        <div className="mx-auto mt-7 h-[5px] w-[60px] bg-[#ff3154]" />
      </div>

      {/* Hotel Cards */}
      <div className="mx-auto mt-5 grid max-w-[1300px] grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">

        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="overflow-hidden border border-[#d9def0] bg-white"
          >

            {/* Image */}
            <div className="h-[235px] w-full overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="px-5 py-3">

              {/* Hotel Name */}
              <h3 className="text-[21px] font-semibold text-[#071d5c]">
                {hotel.name}
              </h3>

              {/* Stars */}
              <div className="mt-1 flex gap-[2px] text-[20px] text-[#ffb000]">
                ★★★★★
              </div>

              {/* Location */}
              <p className="mt-1 text-[15px] italic text-black">
                {hotel.location}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Hotels;