import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import campaign from "../Campaign";

const ProductCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-primary mb-4">
      {campaign?.map((c) => (
        <Carousel.Item key={c.id}>
          <Link to="/" className="d-flex align-items-center">
            <Image src={c.image} alt={c.name} fluid />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
