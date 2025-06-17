import { Separator } from "@/components/ui/separator";
import contactDetails from "@/data/contactDetails";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
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
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Terms and Conditions",
    href: "/terms-and-conditions",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="wrapper pb-4 pt-12">
        <div className="flex flex-col items-center justify-start">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/ecoscape-logo-transparent.png"
              alt="EcoScape Logo"
              width={150}
              height={50}
              className="h-40 w-auto"
            />
          </div>

          <ul className="my-6 flex max-w-72 flex-wrap items-center justify-center gap-4 sm:max-w-full">
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
          <div className="flex flex-col items-center gap-2 text-center text-muted-foreground sm:items-start sm:text-left">
            {/* Copyright */}
            <span>
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:text-foreground">
                Ecoscape
              </Link>
              . All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link
              href={contactDetails.facebook}
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5 hover:text-[#4CAF50]" />
            </Link>
            <Link
              href={contactDetails.instagram}
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5 hover:text-[#4CAF50]" />
            </Link>
            <Link
              href={contactDetails.youtube}
              target="_blank"
              aria-label="YouTube"
            >
              <YoutubeIcon className="h-5 w-5 hover:text-[#4CAF50]" />
            </Link>
          </div>
        </div>

        <div>
          {/* Built by credit */}
          <p className="text-center text-xs font-light">
            Designed & developed by{" "}
            <Link
              href="https://pixelpaws.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal hover:text-foreground"
            >
              PixelPaws Solutions Ltd.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
