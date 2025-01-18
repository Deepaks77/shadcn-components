"use client";

import CarouselComponent from "./Carousel";

const stories = [
  {
    title: "Super Bowl 2024",
    subtitle: "A match in which all aspects matter",
    image:
      "https://img.freepik.com/free-vector/digital-technology-polygon-connection-background_1035-17976.jpg", // Replace with actual paths
  },
  {
    title: "Title 2",
    subtitle: "Another catchy subtitle",
    image:
      "https://wallpapers.com/images/hd/links-background-links-d70sw6qw0wm2s43v.jpg",
  },
  {
    title: "Title 3",
    subtitle: "Another catchy subtitle",
    image: "https://wallpapers.com/images/featured/link-16mi3e7v5hxno9c4.jpg",
  },
];

const TravelStories = () => {
  return (
    <section className="py-10 bg-gray-100 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold">Travel Stories</h3>
        <p className="text-gray-600">We’re so much more than a car service</p>
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-64 rounded-lg shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${story.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-white text-xl font-bold">{story.title}</h4>
                <p className="text-white text-sm">{story.subtitle}</p>
              </div>
              <a
                href="#"
                className="text-white font-semibold underline self-start"
              >
                Read Full Story →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <CarouselComponent />
    </section>
  );
};

export default TravelStories;
