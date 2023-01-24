import React, { useState, useEffect, Suspense } from "react";
// import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectCardList from "../../Containers/ProjectCardsList/ProjectCardList";
import "./Projects.scss";
import axios from "axios";
import ReactLoading from "react-loading";

// import Header from ""
import data from "./DummyList";

const Projects = () => {
  const [temp, setTemp] = useState(true);
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://kssm.herokuapp.com/projects/").then((res) => {
      setTemp(!temp);
      setProjects(res.data);
      console.log(res.data);
      setLoading(false);
    });
    console.log(projects);
  }, []);
  return (
    <div className="projects-page">
      <div className="header">
        <h1 className="header-text">Projects</h1>
      </div>

      {loading && (
        <div className="loading">
          <ReactLoading type="bubbles" color="#B89432" />
          <p className="body-text">Loading</p>
        </div>
      )}

      <Suspense>
        <ProjectCardList data={projects} />
      </Suspense>
    </div>
  );
};

export default Projects;
