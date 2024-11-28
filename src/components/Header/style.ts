import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, var(--color-purple), var(--color-pink));
  color: #fff;
  height: 100px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  
  @media(min-width: 768px){
    height: 150px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
`;

export const ImageLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const Title = styled.span`
  font-size: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;