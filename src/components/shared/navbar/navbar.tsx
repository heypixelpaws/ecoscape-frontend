"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { s } from "motion/react-client";
import { usePathname } from "next/navigation";
import {
  Calendar,
  CalendarCheck,
  CalendarCheck2,
  CalendarDays,
} from "lucide-react";

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
  const [scrollDirection, setScrollDirection] = useState("");

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
    <header
      className={cn(
        "fixed inset-x-0 z-40 transition-all duration-300 ease-in-out",
        scrollDirection === "top" || scrollDirection === ""
          ? "bg-transparent"
          : "mx-auto mt-4 max-w-7xl rounded-full bg-white/90 shadow backdrop-blur-sm",
      )}
    >
      {/* navbar */}
      <div className="wrapper flex items-center justify-between gap-8 py-2">
        {/* logo */}
        <Link href="/" className="">
          <Image
            src="/assets/ecoscape-logo-transparent.png"
            alt="ECOSCAPE LOGO"
            width={300}
            height={260}
            className={cn(
              "transiition-all h-32 w-auto object-contain duration-300 ease-in-out",
              scrollDirection !== "top" && "h-16",
            )}
          />
        </Link>

        {/* navlinks */}
        <nav className="flex items-center justify-end gap-8 px-4 py-2">
          <ul
            className={cn(
              "hidden items-center gap-8 text-base text-black transition-all duration-300 ease-in-out lg:flex",
            )}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors duration-300 hover:text-primary",
                    pathname === item.href && "text-primary",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* cta: book appointment */}
        <div>
          <Button
            size="lg"
            className={cn(
              "transition-all duration-300 ease-in-out",
              scrollDirection !== "top" && "rounded-full",
            )}
          >
            <CalendarCheck2 className="size-4" />
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
