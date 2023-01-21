import React, { useState, useEffect } from "react";
// import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectCardList from "../../Containers/ProjectCardsList/ProjectCardList";
import "./Projects.scss";
import axios from "axios";

// import Header from ""
import data from "./DummyList";

const Projects = () => {
  const [temp, setTemp] = useState(true);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios.get("https://kssm.herokuapp.com/projects/").then((res) => {
      setTemp(!temp);
      setProjects(res.data);
      console.log(res.data);
    });
    console.log(projects);
  }, []);
  return (
    <div className="projects-page">
      <div className="header">
        <h1 className="header-text">Projects</h1>
      </div>
      <ProjectCardList data={projects} />
    </div>
  );
};

export default Projects;
