"use client";

import { Input } from "@/components/ui/input"; // ShadCN UI

const ItineraryForm = () => {
  return (
    <section className="bg-gray-100 py-6 px-6">
      <h3 className="text-xl font-semibold mb-4">Check Your Itinerary</h3>
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input placeholder="Pick-up" />
        <Input placeholder="Drop-off" />
        <Input placeholder="Date" type="date" />
        <button className="bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700">
          View Prices
        </button>
      </form>
      <a href="#" className="block mt-2 text-blue-900 hover:underline">
        My trip has more stops &rarr;
      </a>
    </section>
  );
};

export default ItineraryForm;
