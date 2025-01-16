"use client";

const TripSection = () => {
  return (
    <section className="bg-white py-8 px-6">
      <h3 className="text-xl font-semibold mb-4">Next Trip</h3>
      <div className="bg-gray-100 rounded-lg shadow p-4 mb-6">
        <p className="font-semibold">Monday, August 2 at 07:00 PM</p>
        <p>JFK Airport, Queens → Topping Rose House, Bridgehampton</p>
        <a href="#" className="text-blue-900 hover:underline">
          View Trip Details
        </a>
      </div>

      <h3 className="text-xl font-semibold mb-4">Completed Trips</h3>
      <div className="grid gap-4">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg shadow p-4">
              <p>August {idx + 2}, 2024 at 07:00 PM</p>
              <p>JFK Airport, Queens → Topping Rose House, Bridgehampton</p>
              <a href="#" className="text-blue-900 hover:underline">
                Rebook Trip
              </a>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TripSection;
