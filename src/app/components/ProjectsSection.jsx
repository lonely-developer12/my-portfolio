"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto placeat sed vero, labore deserunt laborum possimus saepe repellendus! Doloremque ducimus sapiente aperiam ex itaque voluptatum cum exercitationem delectus alias.`,
    image: "/image/Project1.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "TODO-App",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto placeat sed vero, labore deserunt laborum possimus saepe repellendus! Doloremque ducimus sapiente aperiam ex itaque voluptatum cum exercitationem delectus alias.`,
    image: "/image/Project7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto placeat sed vero, labore deserunt laborum possimus saepe repellendus! Doloremque ducimus sapiente aperiam ex itaque voluptatum cum exercitationem delectus alias.`,
    image: "/image/Project3.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto placeat sed vero, labore deserunt laborum possimus saepe repellendus! Doloremque ducimus sapiente aperiam ex itaque voluptatum cum exercitationem delectus alias.`,
    image: "/image/Project4.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto placeat sed vero, labore deserunt laborum possimus saepe repellendus! Doloremque ducimus sapiente aperiam ex itaque voluptatum cum exercitationem delectus alias.`,
    image: "/image/Project5.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto placeat sed vero, labore deserunt laborum possimus saepe repellendus! Doloremque ducimus sapiente aperiam ex itaque voluptatum cum exercitationem delectus alias.`,
    image: "/image/Project6.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    initial: { y: 50, opacity: 0 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold uppercase">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        ref={ref}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
