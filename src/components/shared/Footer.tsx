import { Separator } from "@/components/ui/separator";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Sustainability",
    href: "/sustainability",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center justify-start py-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/ecoscape-logo-transparent.png"
              alt="EcoScape Logo"
              width={150}
              height={50}
              className="h-40 w-auto"
            />
            {/* <span className="text-2xl font-bold text-foreground">Ecoscape</span> */}
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-4">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="font-medium text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-foreground">
              Ecoscape
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank" aria-label="Twitter">
              <TwitterIcon className="h-5 w-5 hover:text-[#4CAF50]" />
            </Link>
            <Link href="#" target="_blank" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5 hover:text-[#4CAF50]" />
            </Link>
            <Link href="#" target="_blank" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5 hover:text-[#4CAF50]" />
            </Link>
            <Link href="#" target="_blank" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5 hover:text-[#4CAF50]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
