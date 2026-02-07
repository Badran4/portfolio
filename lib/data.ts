import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor’s Degree in Management Information Systems (MIS)",
    
    description:
      " ",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    
    description:
      "I completed Front-End Development training at Route Academy, focusing on building responsive web applications using React and modern frontend technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
  {
    title: "React js",
    
    description:
"Through my academic background and training, I developed strong problem-solving skills and practical experience in building responsive and user-friendly web applications"    ,
    icon: React.createElement(FaReact),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce ",
    description:
      `A modern and fully responsive e-commerce web application built using React and Tailwind CSS.
The application allows users to browse products, view detailed product information, add items to the shopping cart ;`,
    tags: ["React",  "Tailwind", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "movies-platform",
    description: 
      `A modern and responsive web application built with React and Tailwind CSS that displays the Top 20 trending movies of the day.
The application `,
 tags: ["React", "Tailwind","Redux" ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Project Description",
    description:
      `A high-quality and pixel-perfect frontend web application built using JavaScript, CSS, and Bootstrap.
The project delivers a clean, modern, and user-friendly interface with a strong focus on design accuracy, responsiveness, and smooth user interactions.
.`,
    tags: ["js", "bootstrap", "css", "html", ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "sass",

] as const;
