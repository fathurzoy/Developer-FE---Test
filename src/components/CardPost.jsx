import { Card } from "antd";
import React from "react";
import "./Cardpost.css";

const CardPost = ({ title, body }) => {
  return (
    <Card
      title={<h3>{title}</h3>}
      style={{ width: 400 }}
      hoverable
      className="cardPost"
    >
      <p>{body} </p>
    </Card>
  );
};

export default CardPost;
