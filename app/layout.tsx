import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brilian Portofolio",
  description: "Brilian Portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black relative h-screen">
          <div
            className="flex items-center w-full h-full bg-cover bg-center opacity-60 absolute"
            style={{ backgroundImage: "url(/new-bg.jpg)" }}
          />
          <Navbar />
          <div className="h-screen overflow-x-hidden">{children}</div>
          {/* <div>footer</div> */}
        </div>
      </body>
    </html>
  );
}
