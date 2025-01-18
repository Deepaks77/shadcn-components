import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

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

const CarouselComponent = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-sm">
        <CarouselContent className="-ml-0">
          {stories.map((story, index) => (
            <CarouselItem
              key={index}
              className={`basis-[80%] ${index === 0 ? "pl-0" : "pl-2"} gap-2`}
            >
              <div
                className="relative bg-cover bg-center h-64 rounded-lg shadow-lg overflow-hidden"
                style={{ backgroundImage: `url(${story.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white text-xl font-bold">
                      {story.title}
                    </h4>
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default CarouselComponent;
