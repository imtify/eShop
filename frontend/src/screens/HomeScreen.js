import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import {
  useGetProductsQuery,
  useGetTopProductsQuery,
} from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    pageNumber,
    keyword,
  });

  const { data: topProducts } = useGetTopProductsQuery();

  return (
    <>
      {!keyword ? (
        <>
          <ProductCarousel />
          <h2>Top Rated</h2>
          <Row>
            {topProducts?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data.message || error.error}</Message>
      ) : (
        <>
          <Meta title="eShop - Your Trusted Shopping Place " />

          <hr />
          <h2>Products</h2>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
      <Paginate
        page={data?.page}
        pages={data?.pages}
        keyword={keyword ? keyword : ""}
      />
    </>
  );
};

export default HomeScreen;
