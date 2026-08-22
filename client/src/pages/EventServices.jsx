const services = [
  {
    title: "Corporate Event",
    description: "Creating unforgettable events",
    image: "https://www.eventkepers.com/assets/img/services/coroporate-event.webp",
  },
  {
    title: "Exhibition",
    description: "Stall Design and Fabrication",
    image: "https://www.eventkepers.com/assets/img/services/digisol-stall-designs.webp",
  },
  {
    title: "Corporate Gifting",
    description: "Specializes in premium corporate gifting solutions",
    image: "https://www.eventkepers.com/assets/img/services/corporate-gifiting.webp",
  },
  {
    title: "EventKepers Flagship",
    description: "Venues under complete management.",
    image: "https://www.eventkepers.com/assets/img/services/eventSeating.jpg",
  },
  {
    title: "Venue",
    description: "Banquet halls, Lawns/Farmhous...",
    image: "https://www.eventkepers.com/assets/img/services/wedding-hotel.jpg",
  },
  {
    title: "Photographers",
    description: "Photographers, Cinema/Video, Pre-wedding...",
    image: "https://www.eventkepers.com/assets/img/services/photoShoot.jpg",
  },
  
];

const EventServices = () => {
  return (
    <section className="w-full bg-white py-12">

      {/* Heading */}
      <div className="text-center mb-9">
        <h2 className="text-4xl font-bold text-[#071d5c]">
          EVENTKEEPERS SERVICES
        </h2>

        <p className="mt-3 text-lg text-gray-400">
          Best & Eazy booking Services we offer
        </p>

        {/* Red line */}
        <div className="mx-auto mt-3 h-[4px] w-[60px] bg-[#ff3154]" />
      </div>

      {/* Services Grid */}
      <div className="mx-auto grid max-w-[1297px] grid-cols-1 gap-7 px-5 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service, index) => (
          <div
            key={index}
            className="group relative h-[312px] overflow-hidden"
          >

            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Text Background */}
            <div className="absolute bottom-0 left-0 w-full bg-[#101426]/85 px-4 py-3 text-center">

              <h3 className="text-[22px] font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-1 text-[15px] italic text-white">
                {service.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default EventServices;