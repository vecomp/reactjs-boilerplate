import React, { useState } from "react";
import loginHero from "../../../assets/imgs/login-hero.svg";
import { Column, Container, Input, Row } from "../../../components/atoms";
import { theme } from "../../../configs";

const LoginPage: React.FC = () => {
  const [cpf, setCpf] = useState("");

  const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  return (
    <Container>
      <Row height="100%">
        <Column padding="16px" md={4}>
          <h1>Login Screen</h1>
          <Input type="password" value={cpf} onChange={handleCpf} />
        </Column>
        <Column
          md={8}
          justifyContent="center"
          alignItems="center"
          backgroundColor={theme.colors.primary}
        >
          <img src={loginHero} alt="Login Hero" width={512} />
          <h1 style={{ color: "white" }}>This is a Login Page</h1>
        </Column>
      </Row>
    </Container>
  );
};

export default LoginPage;
