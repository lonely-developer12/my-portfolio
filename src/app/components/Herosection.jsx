"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export const Herosection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: 0.5 }}
          className="col-span-7 place-self-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-2xl lg:text-8xl  lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-blue-400 via-orange-500 to-pink-600">
              Hello i'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={["lonely-developer12", 1000, "", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "50px" }}
              repeat={Infinity}
              className="text-transparent bg-clip-text  bg-gradient-to-r from-blue-400 via-orange-500 to-pink-600"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            tenetur eaque corrupti, pariatur impedit quaerat ut odio ratione,
            architecto sit qui similique modi nihil minima, cupiditate enim
            autem quae voluptatibus?
          </p>
          <div className="gap-12">
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 hover:bg-white text-white hover:text-black transition-all duration-300">
              <span className="bg-[#12121212] hover:bg-white rounded-full px-5 py-2 transition-colors duration-300">
                Hire me
              </span>
            </button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 hover:bg-white text-white hover:text-black transition-all duration-300">
              <span className="bg-[#12121212] hover:bg-white rounded-full px-5 py-2 transition-colors duration-300">
                Download cv
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: 0.5 }}
          className="col-span-5 place-self-center mt-20 lg:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ opacity: 0.5 }}
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative "
          >
            <Image
              src="/image/logo.jpg"
              width={400}
              height={400}
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
