"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rita Das",
    designation: "Child Specialist",
    company: "Chevron Clinical Laboratory (Pte) Ltd",
    testimonial:
      "They turned my vision into reality and went beyond what I expected. Every corner of my home reflects beauty and thoughtful design. I highly recommend their services—truly stunning interiors!",
    avatar:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/client_rita-das-avani.webp",
    image: "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-20.jpg",
    project: "Project Avani",
  },
  {
    id: 2,
    name: "Dr. Sayed Safiul Islam",
    designation: "Orthopedic Surgeon",
    company: "Marine City Medical College & Hospital",
    testimonial:
      "Thank you for turning our apartment into a true reflection of our dreams. The interior design is not only beautiful but also feels deeply personal. We're incredibly grateful for your creativity, dedication, and attention to detail throughout the entire process. It truly feels like home now.",
    avatar:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/client_safiul-islam.webp",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/testimonial-2.jpeg",
    project: "Project Green Bird Apartment",
  },
  {
    id: 3,
    name: "Dipankar Ghosh",
    designation: "Govt. Service Holder",
    company: "",
    testimonial:
      "Heartfelt thanks for the beautiful design and construction of my one-storied home with a strong three-storied foundation. Your team has perfectly blended aesthetics with structural strength, giving me peace of mind and a space I'm proud to call home. Truly appreciate your professionalism and dedication throughout the journey.",
    avatar:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/client_dipankar.webp",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/mrinmoyi-2.jpg",
    project: "Project Mrinmoyi",
  },
  {
    id: 4,
    name: "Joyonta Banik",
    designation: "Deputy Manager",
    company: "ESCO Bangladesh",
    testimonial:
      "Thank you for bringing Srinibash, my beautiful home, to life. It's everything I dreamed of and more. Your effort, creativity, and attention to detail made this journey truly special.",
    avatar:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/client_joyonta.webp",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-14.jpg",
    project: "Project Srinibash Residence",
  },
  {
    id: 5,
    name: "Nipun Deb",
    designation: "Owner",
    company: "Purnata",
    testimonial:
      "We are truly grateful to you and your team for making our Purnata project so beautiful with your exceptional interior design work. Every detail reflects your creativity, dedication, and professionalism. The space feels not just aesthetically pleasing, but also perfectly functional and aligned with our vision.",
    avatar:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/client_nipun.webp",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/purnata-6.jpg",
    project: "Project Purnata",
  },
  {
    id: 6,
    name: "Shimul Chowdhury",
    designation: "Businessman",
    company: "Rolex Shoes",
    testimonial:
      "We are truly grateful to you and your team for making our Purnata project so beautiful with your exceptional interior design work. Every detail reflects your creativity, dedication, and professionalism. The space feels not just aesthetically pleasing, but also perfectly functional and aligned with our vision.",
    avatar:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/client_shimul.webp",
    image: "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-15.jpg",
    project: "Project Noah",
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
    <div className="flex w-full items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="wrapper w-full">
        <h2 className="mb-3 text-center text-2xl font-medium tracking-tight sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
          What Our <span className="font-bold text-[#4CAF50]">Clients</span> Say
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground sm:mb-14 sm:text-base md:text-lg">
          Discover how Ecoscape has transformed spaces and lives across
          Bangladesh with our sustainable design and construction solutions.
        </p>
        <div className="container mx-auto w-full px-4 sm:px-6 md:px-8 lg:max-w-screen-lg xl:max-w-screen-xl">
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
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          <div className="mt-4 flex items-center justify-center gap-1.5 sm:mt-6 sm:gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border-2 sm:h-3.5 sm:w-3.5",
                  {
                    "border-primary bg-primary": current === index + 1,
                  },
                )}
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
  <div className="mb-6 rounded-xl bg-accent px-4 py-6 sm:mb-8 sm:px-6 sm:py-8">
    <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-20">
      <div className="relative hidden aspect-[3/4] w-full max-w-[12rem] shrink-0 rounded-xl bg-muted-foreground/20 sm:max-w-[14rem] md:max-w-[16rem] lg:block lg:max-w-[18rem]">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={400}
          height={400}
          className="h-64 w-full rounded-xl object-cover sm:h-72 md:h-80 lg:h-96"
        />

        <div className="absolute right-0 top-1/4 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full bg-primary sm:h-10 sm:w-10 md:h-12 md:w-12">
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
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
          <div className="flex items-center gap-0.5 sm:gap-1">
            <StarIcon className="h-3 w-3 fill-yellow-500 stroke-yellow-500 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            <StarIcon className="h-3 w-3 fill-yellow-500 stroke-yellow-500 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            <StarIcon className="h-3 w-3 fill-yellow-500 stroke-yellow-500 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            <StarIcon className="h-3 w-3 fill-yellow-500 stroke-yellow-500 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            <StarIcon className="h-3 w-3 fill-yellow-500 stroke-yellow-500 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </div>
        </div>
        <p className="mt-2 text-sm font-light italic sm:text-base md:text-2xl">
          {testimonial.project}
        </p>
        <p className="mt-4 text-sm font-light leading-normal tracking-tight sm:mt-6 sm:text-base lg:text-[1.75rem] lg:!leading-normal xl:text-xl">
          &quot;{testimonial.testimonial}&quot;
        </p>
        <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:hidden sm:gap-3 md:flex md:gap-4">
          <Avatar className="size-12 sm:size-14 md:size-16">
            <AvatarImage
              src={testimonial.avatar}
              alt={testimonial.name}
              className="object-cover"
            />
          </Avatar>
          <div>
            <p className="text-sm font-semibold sm:text-base md:text-lg">
              {testimonial.name}
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              {testimonial.designation}
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonial;
