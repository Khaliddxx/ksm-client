import React, { useState } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./ProjectCardList.scss";

const ProjectCardList = ({ data, textColor, type }) => {
  return (
    <div>
      <div className="container cardlist">
        {data?.map((data) => (
          <ProjectCard
            // style={textColor}
            t={data.name}
            c={data.category}
            date={data.date}
            i={data.mainImg}
            don={data.donor}
            price={data.price}
            idx={data._id}
          />
        ))}
        {/* {console.log(data)} */}
      </div>
    </div>
  );
};

export default ProjectCardList;
