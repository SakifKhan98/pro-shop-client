import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Products = (props) => {
  const { _id, name, image, rating, numReviews, price } = props.product;
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={"/product/" + _id}>
        <Card.Img src={image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link className="cardTitle" to={"/product/" + _id}>
          <Card.Title as="div">
            {" "}
            <strong> {name} </strong>{" "}
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`}></Rating>
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
