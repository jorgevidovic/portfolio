import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jorge Vidovic",
  description: "Desarrollador de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics gaId="G-KYW49K5ML1" />
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
