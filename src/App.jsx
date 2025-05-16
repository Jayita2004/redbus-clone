import React from "react";

const App = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-400 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img src="/redbus-logo.png" alt="redBus" className="h-12 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Bus Tickets Online</h1>
          <p className="text-lg md:text-xl mb-6">India's No.1 Online Bus Ticket Booking Site</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="text"
              placeholder="From"
              className="px-4 py-2 rounded-md text-black w-full md:w-1/4"
            />
            <input
              type="text"
              placeholder="To"
              className="px-4 py-2 rounded-md text-black w-full md:w-1/4"
            />
            <input
              type="date"
              className="px-4 py-2 rounded-md text-black w-full md:w-1/4"
            />
            <button className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold">
              Search Buses
            </button>
          </div>
        </div>
      </section>

      {/* Trending Offers */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Trending Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              title: "Save up to Rs 250 on bus tickets",
              code: "FIRST",
              color: "bg-blue-600",
            },
            {
              title: "Save up to Rs. 300 in AP, Telangana",
              code: "SUPERHIT",
              color: "bg-green-500",
            },
            {
              title: "Save up to Rs 200 on Primo",
              code: "PRIMODAY",
              color: "bg-red-600",
            },
            {
              title: "Save up to 15% on Chartered",
              code: "CHARTERED15",
              color: "bg-green-600",
            },
          ].map((offer, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl text-white shadow-md ${offer.color}`}
            >
              <p className="font-semibold">{offer.title}</p>
              <p className="mt-2 bg-white text-black px-2 py-1 inline-block rounded">
                {offer.code}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Government Buses */}
      <section className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Government Buses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "PEPSU", rating: 3.83 },
            { name: "ASTC", rating: 4.02 },
            { name: "WBTC", rating: 3.96 },
            { name: "KSRTC", rating: 4.12 },
            { name: "TNSTC", rating: 3.75 },
            { name: "APSRTC", rating: 4.00 },
          ].map((bus, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{bus.name}</h3>
                <span className="bg-green-500 text-white px-2 py-1 text-sm rounded">
                  ★ {bus.rating}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Official booking partner of {bus.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Global Presence</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "India", flag: "/India-icon.png" },
            { name: "Singapore", flag: "/Singapore-icon.png" },
            { name: "Malaysia", flag: "/Malaysia-icon.png" },
            { name: "Indonesia", flag: "/Indonesia-icon.png" },
          ].map((country, index) => (
            <div key={index} className="text-center">
              <img
                src={country.flag}
                alt={country.name}
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="mt-2">{country.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Online Bus Ticket Booking on redBus
        </h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>
            <strong>Free Cancellation:</strong> Cancel bus tickets without
            paying cancellation charges.
          </li>
          <li>
            <strong>Change Travel Date:</strong> Modify your date up to 8 hours
            before departure.
          </li>
          <li>
            <strong>Booking for Women:</strong> View women count, get priority
            helplines.
          </li>
          <li>
            <strong>Assurance Program:</strong> Protect against cancellation
            issues. <a href="#" className="text-blue-600">Read More</a>
          </li>
        </ul>
      </section>

      {/* Train Tickets */}
      <section className="p-6 bg-white shadow-inner">
        <h2 className="text-2xl font-bold mb-4 text-center">Train Tickets</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="mb-2">Book IRCTC authorized train tickets.</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Official redRail Partner</li>
            <li>PNR & Live Train Status</li>
            <li>24x7 Customer Support</li>
            <li>Zero Payment Gateway Charges</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t mt-6">
        © 2025 redBus Clone. Built for learning.
      </footer>
    </div>
  );
};

export default App;
