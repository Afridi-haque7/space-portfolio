import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import "./globals.css";

// import StarsCanvas from "@/components/main/StarBackground";
// import Navbar from "@/components/main/Navbar";

const StarsCanvas = dynamic(() => import("@/components/main/StarBackground"));
const Navbar = dynamic(() => import("@/components/main/Navbar"));

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afridi's Portfolio",
  description: "3D space themed portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] w-[100%] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
