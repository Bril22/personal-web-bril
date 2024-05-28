"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex w-full h-full items-center">
      <div className="px-6 md:px-20 md:max-w-3xl flex flex-col gap-5">
        <h1 className="text-[50px] text-[#f5f5dc] font-semibold">
          {`Welcome to My Personal Website`}
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-gray-200 text-2xl font-semibold tracking-widest">
            {`Hi there! I'm Bril,`}
          </p>
          <p className="text-gray-200 text-xl">
            {`A passionate Frontend Developer with a keen eye for design and a love for crafting seamless user experiences.`}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Link
            href="/my-experiences"
            className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
            Learn more
          </Link>
          {/* <Link
            href="/my-projects"
            className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
            My projects
          </Link>
          <Link
            href="/contact-me"
            className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
          >
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
            Contact me
          </Link> */}
        </div>
      </div>
    </div>
  );
}
