import React from "react";
import { useState, useEffect } from "react";
import "./ProjectDetails.scss";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ProjectDetails = () => {
  const [project, setProject] = useState(null);

  const pathname = window.location.pathname;

  useEffect(() => {
    axios
      .get(`https://kssm.herokuapp.com/projects/${pathname.split("/")[2]}`)
      .then((res) => {
        setProject(res.data.project);
        console.log(project);
      });
  }, []);
  return (
    <div className="projectDetails-page">
      {project && (
        <>
          <img className="project-img" src={project[0].mainImg} alt="yup" />
          <div className="flex-2">
            <h1 className="hero-title">Project Details</h1>
            <p>{project[0].description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
