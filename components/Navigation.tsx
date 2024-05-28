"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

interface INavigation {
  withDesc?: boolean;
  withIcon?: boolean;
  cols?: boolean
}

const Navigation = ({ withDesc, withIcon = true, cols = false }: INavigation) => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div className={`flex ${cols ? "flex-col" : "flex-row"} justify-between items-center gap-4`}>
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="min-w-[20%]">
          {withIcon && (
            <nav.icon
              className={`w-[24px] h-[24px] hover:scale-125 ${
                path === nav.name ? "text-[#7f9774]" : "text-[#f5f5dc]"
              }`}
            />
          )}
          {withDesc && <p className={`font-semibold ${path === nav.name ? "text-[#f5f5dc]" : ""}`}>{nav.desc}</p>}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
