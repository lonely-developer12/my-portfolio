"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Edukation",
    id: "edukation",
    content: (
      <ul className="list-disc pl-2 ">
        <li>InfoARS Informaticka Akademija</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
        <ul className="list-disc pl-2 ">
        <li>
        JavaScript
          <div className="flex items-center">
            <progress
              className="progress w-full mr-2"
              value="75"
              max="100"
            ></progress>
            <span>75%</span>
          </div>
        </li>

        <li>
        React
          <div className="flex items-center">
            <progress
              className="progress w-full mr-2"
              value="95"
              max="100"
            ></progress>
            <span>95%</span>
          </div>
        </li>

        <li>
          HTML
          <div className="flex items-center">
            <progress
              className="progress w-full mr-2"
              value="85"
              max="100"
            ></progress>
            <span>85%</span>
          </div>
        </li>

        <li>
          CSS
          <div className="flex items-center">
            <progress
              className="progress w-full mr-2"
              value="85"
              max="100"
            ></progress>
            <span>85%</span>
          </div>
        </li>

        <li>
          Bootstrap
          <div className="flex items-center">
            <progress
              className="progress w-full mr-2"
              value="75"
              max="100"
            ></progress>
            <span>75%</span>
          </div>
        </li>

        <li>
          Tailwind
          <div className="flex items-center">
            <progress
              className="progress w-full mr-2"
              value="90"
              max="100"
            ></progress>
            <span>90%</span>
          </div>
        </li>

       
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [ isPending,startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/image/Project2.jpg"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4 ">About me</h2>
          <p className="text-base ög:text-lg ">
            I'm a full-stack web developer with a passion for building
            interactive and responsive web applications. I have experience in
            work with JavaScript, React, HTML, CSS and Git I am a fast learner
            and always learning I would like to expand my knowledge and skills.
            I look forward to creating fantastic apps.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("edukation")}
              active={tab === "edukation"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {""}
              Experience{""}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};
