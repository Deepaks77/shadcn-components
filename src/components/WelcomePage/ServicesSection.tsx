"use client";

const ServicesSection = () => {
  return (
    <section className="bg-white py-8 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">First Class Services</h4>
          <p>We provide the luxury you need</p>
          <a href="#" className="text-blue-900 hover:underline">
            Explore Services &rarr;
          </a>
        </div>
        <div>
          <h4 className="font-semibold">Premium Luxury Vehicles</h4>
          <p>A full line of luxurious vehicles</p>
          <a href="#" className="text-blue-900 hover:underline">
            Explore Fleet &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
