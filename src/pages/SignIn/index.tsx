import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Text, ForgotPassword, ForgotPasswordText } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Text>Faça seu logon</Text>

      <Input name="email" icon="mail" placeholder="Email" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => console.log('foi')}>Entrar</Button>

      <ForgotPassword onPress={() => console.log('')}>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>
    </Container>
  );
};

export default SignIn;
