"use client";

const TravelStories = () => {
  return (
    <section className="bg-gray-100 py-8 px-6">
      <h3 className="text-xl font-semibold mb-4">Travel Stories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="bg-cover bg-center h-40 rounded-lg shadow-lg relative"
              style={{ backgroundImage: `url(/path/to/image-${idx}.jpg)` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 flex flex-col justify-end">
                <p className="font-semibold">Title {idx + 1}</p>
                <a href="#" className="text-sm underline">
                  Read Full Story
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TravelStories;
