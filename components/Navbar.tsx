"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { IconBar3Outline } from "@/icons/svg";
import Drawer from "./Drawer";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <nav className="fixed top-0 z-[40] w-full h-[100px] shadow-2xl flex justify-between items-center px-10 md:px-20 bg-[#4d5d53]">
        <div className="flex flex-row gap-3 items-center">
          <Link href={"/"}>
            <h1 className="text-[#f5f5dc] text-[25px] font-semibold">
              Bril{" "}
              <span className="text-[#828d86] bg-clip-text bg-gray-800">
                {" "}
                Dev{" "}
              </span>
            </h1>
          </Link>
        </div>
        <div className="md:block hidden">
          <Navigation />
        </div>
        <div className="md:flex flex-row gap-5 mb-2 hidden">
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

        <button onClick={toggleDrawer} className="btn btn-ghost md:hidden">
          <IconBar3Outline className="text-[#f5f5dc]" />
        </button>
      </nav>
      {/* <motion.nav
        animate={isDrawerOpen ? "open" : "closed"}
        variants={variants}
      > */}
          <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      {/* </motion.nav> */}
    </>
  );
};

export default Navbar;
