"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

interface NavigationSubItem {
  title: string;
  href: string;
}

interface NavigationItem {
  title: string;
  href: string;
  items?: NavigationSubItem[];
}

export const Header = () => {
  const navigationItems: {
    title: string;
    href: string;
    items?: { title: string; href: string }[];
  }[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
      // items: [
      //   {
      //     title: "Design Package",
      //     href: "/services/design-package",
      //   },
      //   {
      //     title: "Interior Solution",
      //     href: "/services/interior-solution",
      //   },
      //   {
      //     title: "Customized Furniture",
      //     href: "/services/customized-furniture",
      //   },
      // ],
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const headerVariants = {
    tall: {
      height: "7rem",
      backgroundColor: "transparent",
      borderBottom: "none",
    },
    short: {
      height: "5rem",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    },
  };

  const logoVariants = {
    tall: { height: "5rem" },
    short: { height: "3.5rem" },
  };

  return (
    <>
      <motion.header
        className="fixed left-0 top-0 z-40 flex w-full items-center transition-colors"
        initial="tall"
        animate={isScrolled ? "short" : "tall"}
        variants={headerVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="wrapper-ext flex w-full items-center justify-between gap-16">
          <div className="flex items-center">
            <Link href="/">
              <motion.div
                initial="tall"
                animate={isScrolled ? "short" : "tall"}
                variants={logoVariants}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/ecoscape-icon-transparent.png"
                  alt="EcoScape Logo"
                  width={150}
                  height={50}
                  className="h-full w-auto"
                />
              </motion.div>
            </Link>
          </div>
          <div className="ml-auto hidden items-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row items-center gap-8">
                {navigationItems.map((item: NavigationItem) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href && (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={`text-base font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"}`}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden lg:block">
            <Button
              asChild
              className={
                isScrolled
                  ? "h-10 text-base"
                  : "h-11 border-2 border-primary/60 bg-white/20 px-6 text-base text-white hover:bg-primary/90"
              }
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="size-5" />
                Book a Consultation
              </Link>
            </Button>
          </div>
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setOpen(!isOpen)}
              className={isScrolled ? "" : "text-white hover:bg-white/10"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="wrapper absolute left-0 right-0 top-full flex w-full flex-col gap-4 overflow-hidden border-t bg-background py-4 shadow-lg backdrop-blur-md lg:hidden"
            >
              {navigationItems.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-lg transition-colors hover:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <p className="text-lg font-medium">{item.title}</p>
                      {item.items?.map(
                        (subItem: { title: string; href: string }) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="pl-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                            onClick={() => setOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ),
                      )}
                    </>
                  )}
                </div>
              ))}
              <Button asChild className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Consultation
                </Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* <motion.div
        className="bg-transparent"
        initial="tall"
        animate={isScrolled ? "short" : "tall"}
        variants={headerVariants}
        transition={{ duration: 0.3 }}
      /> */}
    </>
  );
};
