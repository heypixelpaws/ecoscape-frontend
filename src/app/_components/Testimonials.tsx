"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Sarah Rahman",
    designation: "Homeowner",
    company: "Dhaka",
    testimonial:
      "Ecoscape transformed our outdated living space into a modern, eco-friendly haven. Their attention to detail and commitment to sustainable design exceeded our expectations. Our home now feels more spacious, energy-efficient, and truly reflects our lifestyle.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    image: "/assets/testimonials/testimonial-1.jpeg",
  },
  {
    id: 2,
    name: "Rahim Ahmed",
    designation: "CEO",
    company: "GreenTech Solutions",
    testimonial:
      "Working with Ecoscape on our office redesign was a game-changer. They seamlessly integrated sustainable materials and energy-efficient systems, creating a workspace that not only looks fantastic but also aligns perfectly with our company's environmental values.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    image: "/assets/testimonials/testimonial-2.jpeg",
  },
  {
    id: 3,
    name: "Fatima Begum",
    designation: "Restaurant Owner",
    company: "Spice Garden",
    testimonial:
      "Ecoscape's innovative design for our restaurant captured the essence of Bengali cuisine while incorporating sustainable practices. The use of local materials and energy-saving lighting has not only enhanced our guests' dining experience but also reduced our operational costs significantly.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    image: "/assets/testimonials/testimonial-3.jpeg",
  },
  {
    id: 4,
    name: "Arif Hossain",
    designation: "Hotel Manager",
    company: "Bay View Resort",
    testimonial:
      "The renovation Ecoscape did for our beachfront hotel was nothing short of spectacular. They managed to preserve the traditional architecture while integrating modern, eco-friendly elements. Our guests constantly praise the harmonious blend of comfort and sustainability.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    image: "/assets/testimonials/testimonial-4.jpeg",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    designation: "School Principal",
    company: "Green Meadows Academy",
    testimonial:
      "Ecoscape's redesign of our school campus has created an inspiring learning environment. The integration of green spaces, natural light, and sustainable materials has had a positive impact on our students' well-being and academic performance. It's a joy to see them thrive in this eco-friendly setting.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    image: "/assets/testimonials/testimonial-2.jpeg",
  },
  {
    id: 6,
    name: "Kamal Uddin",
    designation: "Architect",
    company: "Urban Innovators",
    testimonial:
      "Collaborating with Ecoscape on various projects has been a rewarding experience. Their commitment to sustainable design and construction practices is unparalleled. They consistently deliver innovative solutions that push the boundaries of eco-friendly architecture in Bangladesh.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    image: "/assets/testimonials/testimonial-3.jpeg",
  },
];

const Testimonial = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
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
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 py-12">
      <div className="wrapper w-full">
        <h2 className="mb-4 text-center text-4xl font-medium tracking-tight md:text-5xl">
          What Our <span className="font-bold text-[#4CAF50]">Clients</span> Say
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-xl text-muted-foreground">
          Discover how Ecoscape has transformed spaces and lives across
          Bangladesh with our sustainable design and construction solutions.
        </p>
        <div className="container mx-auto w-full px-12 lg:max-w-screen-lg xl:max-w-screen-xl">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn("h-3.5 w-3.5 rounded-full border-2", {
                  "border-primary bg-primary": current === index + 1,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <div className="mb-8 rounded-xl bg-accent px-6 py-8 sm:py-6">
    <div className="flex items-center justify-between gap-20">
      <div className="relative hidden aspect-[3/4] w-full max-w-[18rem] shrink-0 rounded-xl bg-muted-foreground/20 lg:block">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={400}
          height={400}
          className="h-96 w-full rounded-xl object-cover"
        />

        <div className="absolute right-0 top-1/4 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-primary">
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="M26.0063 19.8917C30.0826 19.8625 33.7081 20.9066 36.8826 23.024C40.057 25.1414 42.5746 28.0279 44.4353 31.6835C46.2959 35.339 47.2423 39.4088 47.2744 43.8927C47.327 51.2301 44.9837 58.4318 40.2444 65.4978C35.4039 72.6664 28.5671 78.5755 19.734 83.2249L2.54766 74.1759C8.33598 71.2808 13.2548 67.9334 17.3041 64.1335C21.2515 60.3344 23.9203 55.8821 25.3105 50.7765C20.5179 50.4031 16.6348 48.9532 13.6612 46.4267C10.5864 44.0028 9.03329 40.5999 9.00188 36.2178C8.97047 31.8358 10.5227 28.0029 13.6584 24.7192C16.693 21.5381 20.809 19.9289 26.0063 19.8917ZM77.0623 19.5257C81.1387 19.4965 84.7641 20.5406 87.9386 22.6581C91.1131 24.7755 93.6306 27.662 95.4913 31.3175C97.3519 34.9731 98.2983 39.0428 98.3304 43.5268C98.383 50.8642 96.0397 58.0659 91.3004 65.1319C86.4599 72.3005 79.6231 78.2095 70.79 82.859L53.6037 73.8099C59.392 70.9149 64.3108 67.5674 68.3601 63.7676C72.3075 59.9685 74.9763 55.5161 76.3665 50.4105C71.5739 50.0372 67.6908 48.5873 64.7172 46.0608C61.6424 43.6369 60.0893 40.2339 60.0579 35.8519C60.0265 31.4698 61.5787 27.6369 64.7145 24.3532C67.7491 21.1722 71.865 19.563 77.0623 19.5257Z"
              className="fill-primary-foreground"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between gap-1">
          <div className="hidden items-center gap-4 sm:flex md:hidden">
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              {/* <AvatarFallback className="bg-primary text-xl font-medium text-primary-foreground">
                {testimonial.name.charAt(0)}
              </AvatarFallback> */}
            </Avatar>
            <div>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
            <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
            <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
            <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
            <StarIcon className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
          </div>
        </div>
        <p className="mt-6 text-base font-light leading-normal tracking-tight sm:text-lg lg:text-[1.75rem] lg:!leading-normal xl:text-xl">
          &quot;{testimonial.testimonial}&quot;
        </p>
        <div className="mt-6 flex items-center gap-4 sm:hidden md:flex">
          <Avatar>
            <AvatarFallback className="bg-primary text-xl font-medium text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
