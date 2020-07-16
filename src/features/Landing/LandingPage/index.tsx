import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Banner from "../../../assets/img/banner.png";
import GoogleButton from "../../../components/GoogleButton";
import { useAuthContext } from "../../../auth/context";

const Wrapper = styled.div`
  margin-top: 100px;

  .vertical-center {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const LandingPage = () => {
  const { login } = useAuthContext();
  return (
    <Wrapper>
      <Container>
        <Row className="vertical-center">
          <Col className="text-center vertical-center" lg={6}>
            <img className="img img-fluid" src={Banner} />
          </Col>
          <Col className="text-center vertical-center" lg={6}>
            <h1 style={{ fontSize: "80px" }}>Welcome to Scheduler</h1>
            <GoogleButton onClick={login} />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default LandingPage;
