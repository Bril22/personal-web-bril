"use client";
import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface IAnimatedSection {
  children: React.ReactNode;
}

const myEducations = [
  {
    title: "EDUCATION",
    from: "2017",
    to: "2022",
    name: "B.Sc. Geophysical Engineering",
    location: "Bandung Institute of Technology",
  },
];

const myExperiences = [
  {
    title: "EXPERIENCES",
    from: "Sept 2023",
    to: "Present",
    name: "Software Engineer",
    location: "Geonet.me | Melbourne, Australia",
  },
  {
    title: "",
    from: "Jan 2023",
    to: "Aug 2023",
    name: "System Integration Testing",
    location: "Jatis Mobile | Jakarta, Indonesia",
  },
  {
    title: "",
    from: "Jun 2022",
    to: "Dec 2022",
    name: "Quality Assurance Analyst",
    location: "Bank Central Asia (BCA) | Jakarta, Indonesia",
  },
  {
    title: "",
    from: "Mar 2022",
    to: "Jun 2022",
    name: "Frontend Developer",
    location: "Quorum Nusa Prestasi | Jakarta, Indonesia",
  },
];

const myProjects = [
  {
    title: "PROJECTS BASED",
    from: "Dec 2022",
    to: "Oct 2023",
    name: "Software Engineer",
    location: "Freelancer | Bandung, Indonesia",
  },
  {
    title: "",
    from: "Mei 2022",
    to: "Jun 2022",
    name: "Frontend Engineer",
    location: "Braga Technology | Bandung, Indonesia",
  },
  {
    title: "",
    from: "Feb 2022",
    to: "Apr 2022",
    name: "Frontend Engineer",
    location: "Hoomix | Bandung, Indonesia",
  },
];

const organizations = [
  {
    title: "ORGANIZATION",
    from: "Jan 2020",
    to: "Dec 2020",
    name: "Senator",
    location: "HIMA TG “TERRA” ITB",
  },
];

const publication = [
  {
    title: "PUBLICATIONS",
    from: "",
    to: "",
    name: "International Seminar on Earth Science and Technology",
    location: "Published in International of Physics Journal (IOP)",
    link: "https://iopscience.iop.org/article/10.1088/1755-1315/1047/1/012028/pdf",
  },
];

const AnimatedSection = ({ children }: IAnimatedSection) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center pt-40">
      <div className="flex md:flex-row flex-col gap-20 text-center z-20">
        {/* test page */}
        <AnimatedSection>
          <div className={`flex flex-col gap-10 md:gap-20`}>
            {myEducations.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                {item.title && (
                  <h1 className="flex flex-wrap w-full text-2xl md:text-4xl font-semibold text-[#f5f5dc]">
                    {item.title}
                  </h1>
                )}
                <AnimatedSection>
                  <div className="flex flex-col gap-4 justify-center items-start">
                    <p className="text-gray-300">{item.from}</p>
                    <div className="flex flex-col gap-2 text-start border-l-2 px-4 ml-4">
                      <p className="text-[#f5f5dc] text-[20px] italic">
                        {item.name}
                      </p>
                      <p className="font-semibold bg-clip-text text-white">
                        {item.location}
                      </p>
                    </div>
                    <p className="text-gray-300">{item.to}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={`flex flex-col gap-4`}>
            {myExperiences.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                {item.title && (
                  <h1 className="flex flex-wrap w-full text-2xl md:text-4xl font-semibold text-[#f5f5dc]">
                    {item.title}
                  </h1>
                )}
                <AnimatedSection>
                  <div className="flex flex-col gap-4 justify-center items-start">
                    <p className="text-gray-300">{item.from}</p>
                    <div className="flex flex-col gap-2 text-start border-l-2 px-4 ml-4">
                      <p className="text-[#f5f5dc] text-[20px] italic">
                        {item.name}
                      </p>
                      <p className="font-semibold bg-clip-text text-white">
                        {item.location}
                      </p>
                    </div>
                    <p className="text-gray-300">{item.to}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={`flex flex-col gap-4`}>
            {myProjects.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                {item.title && (
                  <h1 className="flex flex-wrap w-full text-2xl md:text-4xl font-semibold text-[#f5f5dc]">
                    {item.title}
                  </h1>
                )}
                <AnimatedSection>
                  <div className="flex flex-col gap-4 justify-center items-start">
                    <p className="text-gray-300">{item.from}</p>
                    <div className="flex flex-col gap-2 text-start border-l-2 px-4 ml-4">
                      <p className="text-[#f5f5dc] text-[20px] italic">
                        {item.name}
                      </p>
                      <p className="font-semibold bg-clip-text text-white">
                        {item.location}
                      </p>
                    </div>
                    <p className="text-gray-300">{item.to}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <div className="flex md:flex-row flex-col gap-20 text-center z-20 pb-20 max-w-[80%]">
        <AnimatedSection>
          <div className={`flex flex-col gap-10 md:gap-20`}>
            {organizations.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                {item.title && (
                  <h1 className="flex flex-wrap w-full text-2xl md:text-4xl font-semibold text-[#f5f5dc]">
                    {item.title}
                  </h1>
                )}
                <AnimatedSection>
                  <div className="flex flex-col gap-4 justify-center items-start">
                    <p className="text-gray-300">{item.from}</p>
                    <div className="flex flex-col gap-2 text-start border-l-2 px-4 ml-4">
                      <p className="text-[#f5f5dc] text-[20px] italic">
                        {item.name}
                      </p>
                      <p className="font-semibold bg-clip-text text-white">
                        {item.location}
                      </p>
                    </div>
                    <p className="text-gray-300">{item.to}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={`flex flex-col gap-4`}>
            {publication.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                {item.title && (
                  <h1 className="flex flex-wrap w-full text-2xl md:text-4xl font-semibold text-[#f5f5dc]">
                    {item.title}
                  </h1>
                )}
                <AnimatedSection>
                  <div className="flex flex-col gap-4 justify-center items-start">
                    <p className="text-gray-300">{item.from}</p>
                    <div className="flex flex-col gap-2 text-start border-l-2 px-4 ml-4">
                      <p className="text-[#f5f5dc] text-[20px] italic">
                        {item.name}
                      </p>
                      <Link href={item.link} rel="noreferrer" target="_blank">
                        <p className="font-semibold bg-clip-text text-white underline">
                          {item.location}
                        </p>
                      </Link>
                    </div>
                    <p className="text-gray-300">{item.to}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className={`flex flex-col gap-4`}>
            <div className="flex flex-col gap-4">
              <h1 className="flex flex-wrap w-full text-2xl md:text-4xl font-semibold text-[#f5f5dc]">
                {"Skills"}
              </h1>
              <AnimatedSection>
                <div className="flex flex-col gap-4 justify-center items-start text-start">
                  <ul className="list-disc flex flex-col gap-4">
                    <li>
                      <p className="text-white text-[20px] italic">
                        {"Javascript/Typescript"}
                      </p>
                    </li>
                    <li>
                      <p className="text-white text-[20px] italic">
                        {"React(NextJs)"}
                      </p>
                    </li>
                    <li>
                      <p className="text-white text-[20px] italic">
                        {"MySQL, MongoDB"}
                      </p>
                    </li>
                    <li>
                      <p className="text-white text-[20px] italic">
                        {"Selenium, Cypress"}
                      </p>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Page;
