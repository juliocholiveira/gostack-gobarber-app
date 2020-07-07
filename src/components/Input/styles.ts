import styled, { css } from 'styled-components/native';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.View<InputProps>`
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background: #202020;
  border-radius: 8px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  margin-left: 16px;
`;
