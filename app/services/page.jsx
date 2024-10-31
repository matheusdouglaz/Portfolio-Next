"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
    {
        num: '01',
        title: 'Front-End',
        description: "I specialize in creating responsive and high-performance web applications using modern technologies like React, Angular, and Next.js. My focus is on clean, maintainable code and ensuring that every interface looks great on any device, delivering seamless and fast user experiences.",
        href: "/work"
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: "I design intuitive and visually appealing interfaces that prioritize user experience and accessibility. With a user-centered approach, I craft layouts that are not only functional but also enhance user engagement, ensuring a smooth and enjoyable interaction with the product.",
        href: "/work"
    },
    // {
    //     num: '03',
    //     title: 'Logo Design',
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, itaque veniam! Tempore dignissimos enim, consequuntur quibusdam pariatur dolorem fugiat!",
    //     href: ""
    // },
    // {
    //     num: '04',
    //     title: 'SEO',
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, itaque veniam! Tempore dignissimos enim, consequuntur quibusdam pariatur dolorem fugiat!",
    //     href: ""
    // },
];

import {motion} from "framer-motion";

const Services = () => {
    return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
       <div className="container mx-auto">
        <motion.div 
        initial={{opacity:0}} 
        animate={{opacity: 1, 
        transition:{delay: 2.4, duration: 0.4, ease:"easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >

            {services.map((service, index) => {
                return ( 
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                    {/*top*/}
                    <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                        <BsArrowDownRight className="text-primary text-3xl"/>
                        </Link>
                    </div>
                    {/*title*/}
                    <h2 className="text-[42px] font-bold leaing-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    {/*description*/}
                    <p className="text-white/60">{service.description}</p>
                    {/*border*/}
                    <div className="border-b border-white/20 w-full "></div>
                </div>
                );
            })}

        </motion.div>
       </div>
    </section>;
};

export default Services;