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
    image: "/assets/work/DevBuguer.png",
    live: "https://devburguer-groi7t7bd-matheus-projects-8900721a.vercel.app/",
    github: "https://github.com/matheusdouglaz/devburguer",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis provident nemo ipsam quisquam, quia mollitia blanditiis.",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis provident nemo ipsam quisquam, quia mollitia blanditiis.",
    stack: [{ name: "React" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/work/CEP.png",
    live: "https://buscador-cep-alpha-orpin.vercel.app/",
    github: "https://github.com/matheusdouglaz/Buscador-CEP",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove the last comma*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*buttons*/}
              <div className="flex items-center gap-4">
                {/* live project button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Livre project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
                {projects.map((project, index)=> {
                    return <SwiperSlide key={index} className="w-full ">
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/*overlay*/}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/*image*/}
                        <div className="relative w-full h-full">
                            <Image src={project.image} fill className="object-cover" alt=""/>
                        </div>
                        </div>
                    </SwiperSlide>
                })}
                {/* slider buttons*/}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl: justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
