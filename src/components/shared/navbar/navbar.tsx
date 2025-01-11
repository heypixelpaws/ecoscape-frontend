"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { CalendarCheck2, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface INavItem {
  label: string;
  href: string;
}

const navItems: INavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "How We Work", href: "/process" },
  { label: "About Us", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("top");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    const diff = current - (previous !== undefined ? previous : 0);

    if (current === 0) {
      setScrollDirection("top");
      return;
    }

    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 z-40 transition-all duration-300 ease-in-out",
        scrollDirection === "top"
          ? "bg-transparent"
          : "wrapper mx-2 mt-2 rounded bg-white/80 shadow-md backdrop-blur-md md:mx-auto md:mt-4",
      )}
    >
      <div className="wrapper-ext flex items-center justify-between py-2">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Image
            src="/assets/ecoscape-logo-transparent.png"
            alt="ECOSCAPE LOGO"
            width={300}
            height={260}
            className={cn(
              "h-24 w-auto object-contain transition-all duration-300 md:h-28",
              scrollDirection !== "top" && "h-12 md:h-16",
            )}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-base font-medium tracking-wide text-gray-700 transition-colors hover:text-primary",
                    pathname === item.href &&
                      "text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="gap-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <CalendarCheck2 className="size-4" />
            <span>Book Appointment</span>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-8">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "text-lg font-medium text-gray-700 transition-colors hover:text-primary",
                          pathname === item.href && "text-primary",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full gap-2">
                  <CalendarCheck2 className="size-4" />
                  <span>Book Appointment</span>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
