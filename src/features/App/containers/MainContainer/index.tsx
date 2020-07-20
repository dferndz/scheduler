import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuthContext } from "../../../../auth/context";
import Calendar from "../../components/Calendar";

const AppPage = () => {
  const { logout } = useAuthContext();

  return (
    <Container>
      <Row>
        <Col md={2}>Side menu</Col>
        <Col md={10}>
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
};

export default AppPage;
