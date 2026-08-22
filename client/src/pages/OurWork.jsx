const galleryImages = [
  {
    image: "https://www.eventkepers.com/assets/img/venue-gallery/valmetevent.webp",
    alt: "Event Exhibition",
  },
  {
    image: "https://www.eventkepers.com/assets/img/venue-gallery/sushanm.webp",
    alt: "Event Setup",
  },
  {
    image: "https://www.eventkepers.com/assets/img/venue-gallery/nationalkidney.webp",
    alt: "Corporate Event",
  },
  {
    image: "https://www.eventkepers.com/assets/img/venue-gallery/ophthalmologyevent.webp",
    alt: "Event Venue",
  },
  {
    image: "https://www.eventkepers.com/assets/img/venue-gallery/bajajallianze.webp",
    alt: "Corporate Event",
  },
  {
    image: "https://www.eventkepers.com/assets/img/venue-gallery/6.jpg",
    alt: "Banquet Event",
  },
  {
    image: "https://www.eventkepers.com/assets/img/venue-gallery/7.jpg",
    alt: "Celebration Event",
  },
  {
    image: "https://www.eventkepers.com/assets/img/venue-gallery/srmmevent.webp",
    alt: "Corporate Setup",
  },
];

const OurWork = () => {
  return (
    <section className="w-full bg-white">

    

      {/* Heading */}
      <div className="py-3 text-center">
        <h2 className="text-4xl font-bold text-[#071d5c]">
          OUR WORK
        </h2>

        <p className="mt-4 text-lg text-gray-400">
          Event gallery
        </p>

        {/* Red Line */}
        <div className="mx-auto mt-2 h-[4px] w-[60px] bg-[#ff3154]" />
      </div>

      {/* Gallery */}
      <div className="mt-5 grid grid-cols-1 gap-[3px] sm:grid-cols-2 lg:grid-cols-4">

        {galleryImages.map((item, index) => (
          <div
            key={index}
            className="group h-[350px] overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}

      </div>

    </section>
  );
};

export default OurWork;