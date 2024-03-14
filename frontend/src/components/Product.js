import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Rating from "./Rating";
import { addToCart, clearCartItems } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const [showQtyButtons, setShowQtyButtons] = useState(false);
  const [qty, setQty] = useState(() => {
    const storedQty = localStorage.getItem(`product_${product._id}_qty`);
    return storedQty ? parseInt(storedQty) : 1;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(`product_${product._id}_qty`, qty);
  }, [qty, product._id]);

  useEffect(() => {
    if (qty > 1) {
      setShowQtyButtons(true);
    }
  }, [qty]);

  const cartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    setShowQtyButtons(true);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      const updatedQty = qty - 1;
      setQty(updatedQty);
      dispatch(addToCart({ ...product, qty: updatedQty }));
    } else if (qty === 1) {
      dispatch(clearCartItems());
      setShowQtyButtons(false);
    }
  };

  const increaseQty = () => {
    const updatedQty = qty + 1;
    setQty(updatedQty);
    dispatch(addToCart({ ...product, qty: updatedQty }));
  };

  return (
    <Card className="mb-4 border-1 shadow-sm position-relative">
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
        {!showQtyButtons && (
          <Button
            className="position-absolute top-50 start-50 translate-middle"
            style={{ zIndex: 1, background: "black", border: "none" }}
            onClick={cartHandler}
          >
            <FaShoppingCart color="orange" />
          </Button>
        )}
        {showQtyButtons && (
          <div className="position-absolute top-50 start-50 translate-middle">
            <Button
              variant="outline-primary"
              size="sm"
              onClick={decreaseQty}
              className="bg-black text-white fw-bold"
            >
              -
            </Button>
            <span className="mx-2 text-white fw-bold">{qty}</span>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={increaseQty}
              className="bg-black text-white fw-bold"
            >
              +
            </Button>
          </div>
        )}
        {showQtyButtons && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100 bg-black"
            style={{ zIndex: 2, opacity: 0.1, pointerEvents: "none" }}
          ></div>
        )}
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
      </Card.Body>
    </Card>
  );
};

export default Product;
