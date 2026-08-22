import React from "react";

const About = () => {
  return (
    <div className="mr-9 ">

      {/* ================= BANNER ================= */}
      <section className="relative h-[500px] w-[1600px] mr-2 overflow-hidden">

        {/* Yaha apni banner image lagana */}
        <img
          src="https://www.eventkepers.com/assets/img/banner/eventkepersbanner.png"
          alt="Eventora About"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold">
            ABOUT EVENTORA
          </h1>

          <p className="mt-3 text-lg text-gray-200">
            Creating memorable event experiences
          </p>
        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        {/* Goal */}
        <div className="mb-14 text-center">
          <h2 className="text-2xl font-semibold leading-relaxed text-[#071d5c] md:text-3xl">
            Our goal is to make sure that each guest enjoys a fantastic
            event experience.
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 bg-[#ff3154]"></div>
        </div>


        {/* Introduction */}
        <div className="mb-12">
          <p className="text-[17px] leading-8 text-gray-600">
            Eventora has established itself as India’s premier network
            for reliable venues, offering a seamless platform for finding
            the perfect setting for weddings, parties, and corporate events.
            Whether you're hosting an intimate gathering or a large-scale
            function, EventKepers provides access to a vast selection of
            top-tier properties, ensuring that every event is executed to
            perfection.
          </p>
        </div>


        {/* Comprehensive Range */}
        <div className="mb-12 rounded-2xl bg-[#f7f8fc]  shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-[#071d5c]">
            A Comprehensive Range of Properties
          </h3>

          <p className="text-[16px] leading-8 text-gray-600">
            Eventora boasts a diverse portfolio of venues that cater to
            all kinds of events. From luxurious hotels and elegant banquet
            halls to trendy lounges and scenic lawns, the platform has
            something for every occasion. For those seeking a more relaxed,
            outdoor setting, the list includes expansive resorts with
            breathtaking views. Business clients are equally well-catered
            to, with a variety of seminar halls, conference halls, and
            corporate training centers available for professional gatherings.
          </p>
        </div>


        {/* Personalized Recommendations */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#071d5c]">
            Personalized Venue Recommendations
          </h3>

          <p className="text-[16px] leading-8 text-gray-600">
            One of the standout features of EventKepers is its ability to
            tailor recommendations based on user preferences. When users
            visit the portal, they input key information about their event,
            such as the number of guests, preferred location, type of event,
            and specific amenities they need. EventKepers’ intelligent system
            then uses this data to curate a personalized list of the most
            suitable venues. This not only saves users the hassle of manually
            filtering through countless options but also ensures they are
            presented with venues that align with their vision and
            requirements.
          </p>
        </div>


        {/* Virtual Tours */}
        <div className="mb-12 rounded-2xl bg-[#071d5c] p-8 text-white shadow-lg">
          <h3 className="mb-4 text-2xl font-bold">
            Virtual Tours and Real-Time Availability
          </h3>

          <p className="text-[16px] leading-8 text-gray-200">
            Event planning often involves visiting multiple venues, which
            can be both time-consuming and stressful. EventKepers addresses
            this challenge by offering virtual tours of all listed properties.
            This feature allows users to explore the layout, ambiance, and
            amenities of a venue from the comfort of their home, providing a
            detailed view that helps in making an informed decision without
            the need for physical visits. Furthermore, EventKepers takes
            convenience to the next level by providing real-time availability
            information for all venues. Once users find a venue they like,
            they can instantly check if it is available on their desired
            date. This feature eliminates the frustration of inquiring about
            dates only to find out that the venue is already booked.
          </p>
        </div>


        {/* Quality */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#071d5c]">
            Ensuring Quality and Reliability
          </h3>

          <p className="text-[16px] leading-8 text-gray-600">
            At the heart of EventKepers' success is its commitment to
            reliability and quality. All venues listed on the platform are
            carefully vetted to ensure they meet high standards of service.
            Whether it’s an exquisite wedding or a high-profile corporate
            event, users can trust that their chosen venue will provide
            exceptional service, ensuring that their event goes off without
            a hitch.
          </p>
        </div>


        {/* Booking */}
        <div className="mb-16 rounded-2xl bg-[#f7f8fc]  shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-[#071d5c]">
            Streamlined Booking Process
          </h3>

          <p className="text-[16px] leading-8 text-gray-600">
            Booking a venue through EventKepers is a smooth and
            straightforward process. Once users have shortlisted their
            preferred options, they can directly communicate with the
            venue's management through the platform. EventKepers facilitates
            this process by offering an easy-to-use interface for inquiries,
            negotiations, and final bookings.
          </p>
        </div>


        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#071d5c] text-2xl text-white">
              ✓
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#071d5c]">
              Establishing a Standard
            </h3>

            <p className="text-sm leading-7 text-gray-500">
              EventKepers assures a consistently excellent experience for all
              customers at every one of its venues.
            </p>
          </div>


          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff3154] text-2xl text-white">
              ★
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#071d5c]">
              Experienced Venue Managers
            </h3>

            <p className="text-sm leading-7 text-gray-500">
              Venue managers, vested with the ultimate authority to finalize
              deals, ensure that customers receive comprehensive information
              about venues all at once.
            </p>
          </div>


          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#071d5c] text-2xl text-white">
              ⚡
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#071d5c]">
              Powered by Technology
            </h3>

            <p className="text-sm leading-7 text-gray-500">
              We utilize advanced software to manage our venues, providing
              customers with real-time availability calendars and streamlined
              inquiry management. This enhances the efficiency of the entire
              booking process, ensuring a smooth experience without any
              hitches.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default About;