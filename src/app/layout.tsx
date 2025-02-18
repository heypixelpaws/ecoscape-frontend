import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Roboto, Roboto_Condensed, Montserrat } from "next/font/google";
import { Header } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const roboto_condensed = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecoscapebd.com"), // Replace with your actual domain
  title: {
    default:
      "Ecoscape Design & Construction | Sustainable Architecture in Bangladesh",
    template: "%s | Ecoscape Design & Construction",
  },
  description:
    "Ecoscape delivers innovative, sustainable architectural, structural, and interior design solutions in Bangladesh. We blend local heritage with global trends for eco-friendly, creative spaces.",
  keywords: [
    "sustainable architecture",
    "eco-friendly design",
    "Bangladesh construction",
    "innovative interiors",
    "green building",
  ],
  authors: [{ name: "Ecoscape Design Team" }],
  creator: "Ecoscape Design & Construction",
  publisher: "Ecoscape Design & Construction",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecoscapebd.com", // Replace with your actual domain
    siteName: "Ecoscape Design & Construction",
    title: "Sustainable Architecture & Design Solutions | Ecoscape",
    description:
      "Discover Ecoscape's innovative, eco-friendly architectural and interior design services in Bangladesh. Blending tradition with modern sustainability.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ecoscape Design & Construction | Sustainable Architecture in Bangladesh",
    description:
      "Innovative, eco-friendly architectural and interior design solutions blending local heritage with global sustainability trends.",
    creator: "@ecoscopedesign", // Replace with your actual Twitter handle
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "architecture",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_condensed.className} ${roboto.className} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
