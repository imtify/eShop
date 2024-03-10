import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, Modal } from "react-bootstrap";
import campaign from "../Campaign";

const ProductCarousel = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Carousel pause="hover" className="bg-primary mb-4">
        {campaign?.map((c) => (
          <Carousel.Item key={c.id}>
            <Link
              to="/"
              className="d-flex align-items-center"
              onClick={handleShowModal} // Open the modal when the link is clicked
            >
              <Image src={c.image} alt={c.name} fluid />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      <div style={{ position: "relative" }}>
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <div className="p-4 text-center">
            <h2>Coming Soon...</h2>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ProductCarousel;
