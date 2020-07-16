import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useAuthContext } from "../../../../auth/context";

const Navigation = () => {
  const { login } = useAuthContext();
  return (
    <Container>
      <Navbar className="navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Scheduler
        </a>
      </Navbar>
    </Container>
  );
};

export default Navigation;
