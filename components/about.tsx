"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">I'm a Junior Frontend Developer specializing in React and Next.js.{" "}</span>
      I focus on building clean, responsive, and user-friendly web applications using modern frontend technologies.{" "}
       <span className="font-medium">I studied frontend development at Route Academy and hold a Bachelor's degree in Management Information Systems.</span>.{" "}
        <span className="italic">I have built real-world projects, including a modern e-commerce web application, with strong attention to UI consistency and reusable components.</span> is the
       I'm continuously learning and improving my skills to grow as a frontend developer.{" "}
        <span className="font-medium">
          React, Next.js, Node.js, 
        </span>
        . I am also familiar with TypeScript . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      
    </motion.section>
  );
}
