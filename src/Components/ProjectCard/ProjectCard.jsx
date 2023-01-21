import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import "./ProjectCard.scss";

import donor from "../../Assets/donor.svg";

// import card from "./card.png";

const ProjectCard = (props) => {
  const [data, setData] = useState({
    title: props.t,
    categories: props.c,
    donor: props.don,
    date: props.date.split("T")[0],
    image: props.i,
    description: props.d,
    price: props.price,
    idx: props.idx,
  });

  // const newDate = new Date(data.date.toDateString());
  // console.log(newDate);

  return (
    <div>
      <Card className="card" id="card" bg="white" style={{ width: "18rem" }}>
        <Card.Img className="card-img" variant="top" src={data.image} />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{data.title}</Card.Title>
          <div className="cat">
            {data.categories?.map((cat) => (
              <Card.Text className="card-cat">{cat}</Card.Text>
            ))}
          </div>
          <div className="donor">
            <img src={donor} alt="donor" />

            <Card.Text className="card-donor">{data.donor}</Card.Text>
          </div>
          <div className="phone">
            <Card.Text className="card-date">{data.date}</Card.Text>
            <div className="price">
              <Card.Text className="card-price">{data.price}</Card.Text>
              <p className="currency">SDG</p>
            </div>
          </div>
          <div
            style={{
              bottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignSelf: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              className="apply-button"
              href={`/projects/${data.idx}`}
              variant="primary"
              // style={{ backgroundColor: props.style }}
            >
              View details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
