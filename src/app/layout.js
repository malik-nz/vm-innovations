import "./globals.css";
import { Footer, Header } from "@/components";
import {Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // You can customize this
  display: 'swap',
});

export const metadata = {
  title: "VM Innovations",
  description: "VMInnovation Agency provides cutting-edge IT solutions, including web and mobile development, digital marketing, cloud infrastructure, and cybersecurity services. We turn your ideas into digital success.",
  keywords: [
    "VMInnovation Agency",
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Cybersecurity Services",
    "Digital Marketing",
    "IT Solutions",
    "Tech Agency",
    "Custom Software Development",
    "Scalable Infrastructure"
  ].join(", "),
  authors: [{ name: "VMInnovation Agency", url: "https://vminnovation.com" }],
  creator: "VMInnovation Agency",
  publisher: "VMInnovation Agency",
  robots: "index, follow",
  openGraph: {
    title: "VMInnovation Agency | Web, Mobile, Cloud & Cybersecurity Experts",
    description:
      "Explore VMInnovation Agency’s full-service IT solutions from web and mobile development to cloud infrastructure and security. Your digital success starts here.",
    url: "https://vminnovation.com",
    siteName: "VMInnovation Agency",
    images: [
      {
        url: "https://vminnovation.com/images/og-image.jpg", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "VMInnovation - Innovative IT Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VMInnovation Agency",
    description:
      "Smart, secure, and scalable IT solutions for businesses — from web development to cybersecurity.",
    site: "@vminnovation", // Replace with your real Twitter handle
    creator: "@vminnovation", // Replace with your real Twitter handle
    images: ["https://vminnovation.com/images/twitter-card.jpg"], // replace with actual image
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
          integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
