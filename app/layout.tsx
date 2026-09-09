import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SmoothScrolling from "./components/common/SmoothScrolling";

const poppins = localFont({
  src: [
    {
      path: "./fonts/poppins-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/poppins-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/poppins-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/poppins-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/poppins-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PawCare — Happy Pets, Healthy Lives",
  description:
    "Your trusted pet care hub for premium pet food, toys, grooming, and expert care services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScrolling>
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
