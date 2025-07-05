import type { Metadata } from "next";
import { Grand_Hotel, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"]
});

const grandHotel = Grand_Hotel({
  variable: "--font-grand-hotel",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Savorelle | Discover & Order from Top Restaurants",
  description: "Savorelle helps you explore, compare, and order food from the best restaurants near you. Personalized recommendations, seamless ordering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${grandHotel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
