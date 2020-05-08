import styled from 'styled-components';

export const Title = styled.h1`
  color: white;
  font-size: 35px;
`;

export const Subtitle = styled.p`
  color: white;
  margin-top: 10px;
`;

export const GradientBackground = styled.div`
  height: 100vh;

  background: rgb(36, 128, 107);
  background: linear-gradient(
    0deg,
    rgba(36, 128, 107, 1) 34%,
    rgba(42, 191, 132, 1) 100%
  );
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`;

export const Container = styled.div`
  margin-top: auto;
  align-self: flex-end;
  width: 80%;
`;
