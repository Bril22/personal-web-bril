"use client";
import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";

interface IDrawer {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: IDrawer) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleDrawerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 z-40 ${isOpen ? "" : "hidden"}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f5f5dc] shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
        onClick={handleDrawerClick}
      >
        <button onClick={onClose} className="p-2 text-black">
          <Image src={"/close-button.svg"} width={28} height={28} alt="close-button" className="bg-lime-50" />
        </button>
        <nav className="flex flex-col gap-8">
          <Navigation withIcon={false} withDesc cols />
          <div className="flex gap-4 justify-center items-center">
            {Socials.map((social, i) => (
              <Link key={i} href={social.link} rel="noreferrer" target="_blank">
                <Image
                  key={social.name}
                  src={social.src}
                  alt={social.name}
                  width={28}
                  height={28}
                />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
