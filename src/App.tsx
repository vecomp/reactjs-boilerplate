import React from "react";
import { Container } from "./components/atoms";
import Column from "./components/atoms/column";
import Row from "./components/atoms/row";

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Column xs={12} sm={6} md={4} backgroundColor="red">
          <h2>R1 C1</h2>
        </Column>
        <Column xs={12} sm={6} md={4} backgroundColor="green">
          <h2>R1 C2</h2>
        </Column>
        <Column xs={12} sm={6} md={4} backgroundColor="blue">
          <h2>R1 C3</h2>
        </Column>
      </Row>
      <Row>
        <Column xs={12} sm={6} md={6} backgroundColor="navy">
          <h2>R2 C1</h2>
        </Column>
        <Column xs={12} sm={3} md={6} backgroundColor="olive">
          <h2>R2 C2</h2>
        </Column>
      </Row>
      <Row>
        <Column xs={12} sm={3} md={3} backgroundColor="orange">
          <h2>R2 C1</h2>
        </Column>
        <Column xs={12} sm={3} md={5} backgroundColor="yellow">
          <h2>R2 C2</h2>
        </Column>
      </Row>
      <Row>
        <Column xs={12} sm={3} md={4} backgroundColor="cyan">
          <h2>R2 C1</h2>
        </Column>
      </Row>
    </Container>
  );
};

export default App;
