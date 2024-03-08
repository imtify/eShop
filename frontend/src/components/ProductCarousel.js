import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, error } = useGetTopProductsQuery();

  return error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products?.map((product) => (
        <Carousel.Item key={product._id}>
          <Link
            to={`/product/${product._id}`}
            className="d-flex align-items-center"
          >
            <Image src={product.image} alt={product.name} fluid />
            <h4 className="text-white text-center p-4">
              {product.description}
            </h4>
            <Carousel.Caption className="position-absolute bottom-0 start-0 end-0 p-4 bg-dark bg-opacity-75">
              <h2 className="text-white text-right">
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
