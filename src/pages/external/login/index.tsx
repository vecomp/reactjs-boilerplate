import React, { useEffect, useState } from 'react';
import { Column, Container, Input, Row } from '../../../components/atoms';
import { theme } from '../../../configs';

const LoginPage: React.FC = () => {
    const [cpf, setCpf] = useState('');

    const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(event.target.value);
    }

    return (
        <Container>
            <Row height="100%">
                <Column padding='16px' md={4}>
                <h1>Login Screen</h1>
                    <Input type='password' value={cpf} onChange={handleCpf} />
                </Column>
                <Column md={8} backgroundColor={theme.colors.primary}>
                    <h3>Hero</h3>
                </Column>
            </Row>
        </Container>
    )
}

export default LoginPage;