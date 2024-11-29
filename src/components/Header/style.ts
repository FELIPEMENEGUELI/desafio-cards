import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, var(--color-purple), var(--color-pink));
  color: #fff;
  height: 200px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  
  @media(min-width: 768px){
    height: 260px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

export const ImageLogo = styled.img`
  width: 192px;
  height: 37px;
  margin-left: 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 261px;
  object-fit: cover;
`;