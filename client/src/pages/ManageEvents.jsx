import React from "react";

const ManageEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-[#111A3A] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <p className="text-[#B9D9D8] mb-3">
            Eventora Events
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Manage Events
          </h1>

          <p className="mt-5 text-gray-300 max-w-2xl text-lg leading-8">
            Keep your Eventora events organized and manage the information
            associated with events you have created.
          </p>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">

        <div className="bg-white rounded-2xl p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-[#111A3A]">
            Manage your events from one place
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Eventora gives organizers a convenient way to review their
            events and maintain important event information. This makes
            it easier to keep event details accurate and organized.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div>
              <h3 className="font-bold">
                Review Events
              </h3>

              <p className="text-gray-600 mt-2">
                View the events associated with your account.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Update Information
              </h3>

              <p className="text-gray-600 mt-2">
                Keep relevant event information up to date.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Stay Organized
              </h3>

              <p className="text-gray-600 mt-2">
                Keep your event activities organized through Eventora.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ManageEvents;