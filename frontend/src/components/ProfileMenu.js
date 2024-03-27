import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProfileMenu = () => {
  return (
    <Col>
      <h2 className="text-center">My Account</h2>
      <Row className="mx-4 gap-2">
        <LinkContainer to="/setting">
          <Button>Account Setting</Button>
        </LinkContainer>
        <LinkContainer to="/addresses">
          <Button>My Addresses</Button>
        </LinkContainer>
        <LinkContainer to="/orders">
          <Button>My Orders</Button>
        </LinkContainer>
      </Row>
    </Col>
  );
};

export default ProfileMenu;
