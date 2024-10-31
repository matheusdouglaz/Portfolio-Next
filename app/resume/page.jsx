"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data

const about = {
  title: "About me",
  description: "A developer driven by challenges and continuous learning. I have experience in JavaScript, React, Angular, Next, HTML and CSS, and I apply this knowledge to create innovative and effective digital solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Matheus Alves",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+55) 61 9 9415-1115",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian",
    },
    {
      fieldName: "Languages",
      fieldValue: "Português",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "I currently work as a web developer at MDS, where I use HTML, CSS and JavaScript and tools such as Plone and WordPress. I also work as a freelancer for Finitum and have provided services for Inpacto, focusing on frontend using React, Angular, Next.js, among other technologies.",
  items: [
    {
      company: "MDS",
      position: "Web developer",
      duration: "2023 - Present",
    },
    {
      company: "Finitum",
      position: "Front-End freelancer",
      duration: "09/2021 - 07-2023",
    },
    {
      company: "InPacto",
      position: "Front-End freelancer",
      duration: "09/2023 - 12/2023",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description: "Graduating in Systems Analysis and Development, with experience in several languages ​​and technologies. I have completed courses in JavaScript, HTML, CSS, Tailwind, React, Angular, Programming Logic, UI/UX, among others.",
  items: [
    {
      institution: "Descomplica",
      degree: "Analise de Sistemas",
      duration: "2023-2025",
    },
    {
      institution: "Rocketseat",
      degree: "Desenvolvimento Web",
      duration: "2023",
    },
    {
      institution: "DIO",
      degree: "Formação JavaScript",
      duration: "2023",
    },
    {
      institution: "DIO",
      degree: "Introdução ao NEXT",
      duration: "2023",
    },
    {
      institution: "Udemy",
      degree: "PHP",
      duration: "2024",
    },
  ],
};

//Skills data
const skills = {
  title: "My skills",
  //description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
         <Tabs 
         defaultValue="experience"
         className="flex flex-col xl:flex-row gap-[60px]"
         >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
               <TabsTrigger value="experience">Experience</TabsTrigger>
               <TabsTrigger value="education">Education</TabsTrigger>
               <TabsTrigger value="skills">Skills</TabsTrigger>
               <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/*content*/}
            <div className="min-h-[70vh] w-full">
               {/*experience*/}
               <TabsContent value="experience" className='w-full'>
                 <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                     <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                           return (
                           <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                              <div className="flex items-center gap-3">
                                 {/*dot*/}
                                 <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                 <p className="text-white/60">{item.company}</p>
                              </div>
                           </li>
                           );
                        })}
                     </ul>
                  </ScrollArea>
                 </div>
               </TabsContent>

               {/*education*/}
               <TabsContent value="education" className='w-full'>
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                     <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                           return (
                           <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                              <div className="flex items-center gap-3">
                                 {/*dot*/}
                                 <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                 <p className="text-white/60">{item.institution}</p>
                              </div>
                           </li>
                           );
                        })}
                     </ul>
                  </ScrollArea>
                 </div>
               </TabsContent>

               {/*skills*/}
               <TabsContent value="skills" className='w-full h-full'>
                  <div className="flex flex-col gap-[30px]">
                     <div className="flex flex-col gap-[30px] text-center xl:text-left">
                     <h3 className="text-4xl font-bold">{skills.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                     </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                     {skills.skillList.map((skill, index)=> {
                        return( 
                        <li key={index}>
                           <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                 <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                 </TooltipTrigger>
                                 <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                 </TooltipContent>
                              </Tooltip>
                           </TooltipProvider>

                        </li>
                        );
                     })}
                  </ul>
                  </div>
               </TabsContent>

               {/*about*/}
               <TabsContent value="about" className='w-full text-center xl:text-left'>
                  <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                     {about.info.map((item, index) =>{
                        return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                           <span className="text-white/60">{item.fieldName}</span>
                           <span className="text-xl">{item.fieldValue}</span>
                        </li>
                        );
                     })}
                  </ul>
                  </div>
               </TabsContent>
            </div>
         </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
