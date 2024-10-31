"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Coffee Shop Project Template, developed with Next.js, Tailwind CSS, React, Framer Motion and GSAP. This project offers a modern and interactive interface, ideal for coffee shops looking for an attractive and dynamic visual experience for their customers.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "React" }],
    image: "/assets/work/coffee.png",
    live: "https://cafeteria-two-beta.vercel.app/",
    github: "https://github.com/matheusdouglaz/Cafeteria",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "This project, developed with Tailwind CSS and JavaScript, features a sleek and modern layout for an interior design website. With a minimalist aesthetic and clean navigation, the design provides an attractive and intuitive visual experience, highlighting the uniqueness and style of the space. Ideal for the decoration and architecture sector, it combines sophistication and functionality.",
    stack: [{ name: "Tailwind.css" }, { name: "JS" }],
    image: "/assets/work/interno.png",
    live: "https://interno-drab.vercel.app/",
    github: "https://github.com/matheusdouglaz/Interno",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "DevBurguer is an e-commerce application developed to optimize the online ordering process of a burger restaurant, allowing sales only at specific times. With shopping cart management features, the project offers an intuitive user experience, facilitating product selection and order submission in real time.",
    stack: [{ name: "HTML.js" }, { name: "CSS" }, { name: "Tailwind.css" }, { name: "JS" }],
    image: "/assets/work/devburguer.png",
    live: "https://devburguer-groi7t7bd-matheus-projects-8900721a.vercel.app/",
    github: "https://github.com/matheusdouglaz/devburguer",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "Fokus is a productivity-focused web application developed with HTML, CSS, and JavaScript. It features a sleek, gradient-rich design that encourages users to stay on task through a customizable timer interface. The page is designed to be visually immersive, providing options for work and rest intervals to help users dive into their tasks with complete focus.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
    image: "/assets/work/fokus.png",
    live: "https://your-fokus.vercel.app/",
    github: "https://github.com/matheusdouglaz/Your-fokus",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description:
      "CEP Finder is a responsive web tool built with React, HTML, and CSS, designed to quickly locate postal codes across Brazil. The minimalistic interface allows users to input and search for postal codes effortlessly, displaying results in a clear and intuitive format. This project emphasizes clean design and ease of use, making location-based searches straightforward.",
    stack: [{ name: "React" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/work/CEP.png",
    live: "https://buscador-cep-alpha-orpin.vercel.app/",
    github: "https://github.com/matheusdouglaz/Buscador-CEP",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold text-white capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className="mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <div className="h-[300px] sm:h-[460px] relative group flex justify-center items-center bg-pink-50/20 w-full sm:w-auto">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;