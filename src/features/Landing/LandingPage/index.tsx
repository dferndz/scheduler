import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import Banner from "../../../assets/img/banner.png";
import { useAuthContext } from "../../../auth/context";

const Wrapper = styled.div``;

const LandingPage = () => {
  const { login } = useAuthContext();
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6} sm={12} className="mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Welcome to Scheduler</h5>
                <hr />
                <h6 className="card-title text-center">Sign in to continue</h6>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                    <label>Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label>Password</label>
                  </div>
                  <Button
                    variant="dark"
                    className="btn-lg text-uppercase btn-block"
                  >
                    Sign in
                  </Button>
                  <hr className="my-4" />
                  <Button
                    variant="outline-dark"
                    className="btn-lg text-uppercase btn-block"
                    onClick={login}
                  >
                    <i className="fab fa-google mr-2"></i> Sign in with Google
                  </Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default LandingPage;
