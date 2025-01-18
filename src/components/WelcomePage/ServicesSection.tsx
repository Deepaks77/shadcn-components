"use client";

const TravelServices = () => {
  const services = [
    {
      title: "First Class Services",
      description: "We provide the luxury you need",
      linkText: "Explore Services",
      image:
        "https://img.freepik.com/free-vector/digital-technology-polygon-connection-background_1035-17976.jpg", // Replace with your actual image path
      link: "#",
    },
    {
      title: "Premium Luxury Vehicles",
      description: "A Full Line of Luxurious Vehicles",
      linkText: "Explore Fleet",
      image:
        "https://img.freepik.com/free-vector/digital-technology-polygon-connection-background_1035-17976.jpg", // Replace with your actual image path
      link: "#",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover lg:h-full lg:object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-black lg:via-transparent lg:to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end lg:justify-start lg:items-start lg:p-10">
              <h3 className="text-white text-xl font-bold">{service.title}</h3>
              <p className="text-white text-sm mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-white font-semibold underline hover:text-gray-200"
              >
                {service.linkText} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelServices;
