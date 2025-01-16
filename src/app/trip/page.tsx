"use client";
import React, { useState } from "react";

const TripDetails = () => {
  const [showPassengers, setShowPassengers] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Trip Details</h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Trip Summary */}
          <div className="order-1 lg:order-2 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Trip Summary</h3>
            <div className="space-y-2">
              <div className="text-sm">
                <strong>JFK Airport</strong>
                <p>John F. Kennedy International Airport, Queens, NY 11430</p>
                <span>07:00 PM</span>
              </div>
              <div className="text-sm">
                <strong>Topping Rose House</strong>
                <p>1 Bridgehampton-Sag Harbor Turnpike, Bridgehampton, NY</p>
                <span>08:47 PM</span>
              </div>
            </div>
            <button className="text-blue-600 hover:underline mt-3">Edit</button>
          </div>

          {/* Passenger Details */}
          <div className="order-2 lg:order-1 lg:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Passenger Details</h3>
            <div className="space-y-3">
              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="passenger"
                    value="myself"
                    className="form-radio text-blue-600"
                  />
                  <span>Myself</span>
                </label>
                <label className="flex items-center space-x-3 mt-2">
                  <input
                    type="radio"
                    name="passenger"
                    value="someone-else"
                    className="form-radio text-blue-600"
                  />
                  <span>Someone else</span>
                </label>
              </div>
              <button
                onClick={() => setShowPassengers(!showPassengers)}
                className="text-blue-600 hover:underline"
              >
                Add More Passenger(s)
              </button>
              {showPassengers && (
                <div className="mt-4 bg-white p-4 border rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">Passenger Info</h4>
                  <input
                    type="text"
                    placeholder="Passenger Name"
                    className="w-full p-2 border rounded-lg mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Passenger Contact"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Travel Essentials */}
          <div className="order-3 lg:order-5 lg:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Travel Essentials</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span>Child seat</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span>Seat booster for children</span>
              </label>
              <button className="text-blue-600 hover:underline">
                Add Other
              </button>
            </div>
          </div>

          {/* Perfect Ride */}
          <div className="order-4 lg:order-3 lg:col-span-2 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">The Perfect Ride</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Music preference
                </label>
                <select className="w-full p-2 border rounded-lg">
                  <option>None</option>
                  <option>Classical</option>
                  <option>Pop</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Car temperature
                </label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Default</option>
                  <option>Cool</option>
                  <option>Warm</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Conversation
                </label>
                <select className="w-full p-2 border rounded-lg">
                  <option>None</option>
                  <option>Light conversation</option>
                  <option>Engaging</option>
                </select>
              </div>
            </div>
            <button className="text-blue-600 hover:underline mt-3">
              Add Preference
            </button>
          </div>

          {/* Customer Support */}
          <div className="order-5 lg:order-4 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <p className="text-sm">
              Our call center support is available 24/7 to help you create your
              booking.
            </p>
            <button className="text-blue-600 hover:underline mt-3">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
            Back
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
