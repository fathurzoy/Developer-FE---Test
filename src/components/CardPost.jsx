import { Card } from "antd";
import React from "react";
import "./Cardpost.css";

const CardPost = ({ title, body }) => {
  return (
    <Card
      title={<h3 className="titleCard">{title}</h3>}
      style={{ width: 400 }}
      hoverable
      className="cardPost"
    >
      <p className="bodyCard">{body} </p>
    </Card>
  );
};

export default CardPost;
