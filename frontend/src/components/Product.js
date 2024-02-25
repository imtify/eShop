import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };
  return (
    <Card
      className="mb-4 border-1 shadow-sm position-relative"
      onMouseEnter={() => handleMouseEnter(product._id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="position-relative">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            className="img-fluid rounded-top"
            style={{ width: "400px", height: "250px" }}
          />
        </Link>

        <div
          className={`position-absolute top-0 start-0 w-100 h-100 ${
            hoveredProductId === product._id ? "bg-black opacity-50" : ""
          }`}
          style={{
            transition: "opacity 0.3s ease-in-out",
            pointerEvents: "none",
          }}
        ></div>
      </div>
      <Card.Body className="p-3">
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text className="text-muted mb-2">${product.price}</Card.Text>
        {hoveredProductId === product._id && (
          <Button
            variant="primary"
            className="position-absolute top-50 start-50 translate-middle"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              marginTop: "-50px",
            }}
          >
            <FaShoppingCart style={{ fontSize: "24px", color: "#fff" }} />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
