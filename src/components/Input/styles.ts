import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background: #202020;
  border-radius: 8px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  margin-left: 16px;
`;
