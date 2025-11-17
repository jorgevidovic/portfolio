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
  title: "Jorge Vidovic | Desarrollador de Software",
  description: "Desarrollador de software especializado en desarrollo web full-stack. Desarrollo software a medida, abarcando todas las áreas del proyecto.",
  keywords: ["desarrollador de software", "desarrollo web", "programador", "full-stack developer", "Jorge Vidovic"],
  authors: [{ name: "Jorge Vidovic" }],
  creator: "Jorge Vidovic",
  publisher: "Jorge Vidovic",
  metadataBase: new URL('https://jorgevidovic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jorge Vidovic | Desarrollador de Software",
    description: "Desarrollador de software especializado en desarrollo web full-stack. Desarrollo software a medida, abarcando todas las áreas del proyecto.",
    url: 'https://jorgevidovic.com',
    siteName: 'Jorge Vidovic Portfolio',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/jorgevidovic.jpg',
        width: 1200,
        height: 630,
        alt: 'Jorge Vidovic - Desarrollador de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jorge Vidovic | Desarrollador de Software",
    description: "Desarrollador de software especializado en desarrollo web full-stack.",
    images: ['/jorgevidovic.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
