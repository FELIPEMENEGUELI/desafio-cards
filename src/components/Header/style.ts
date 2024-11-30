import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, var(--cor-primaria), var(--cor-secundaria));
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  top: 0;
  width: 100%;
  height: 64px;
  
  @media(min-width: 1400px){
    position: absolute;
    width: 1440px;
  }
`;

export const ImageLogo = styled.img`
  margin-top: 14px;
  margin-left: 24px;
  width: 192px;
  height: 37px;
  background: transparent 0% 0% no-repeat padding-box;
`;

export const Image = styled.img`
  height: 150px;
  width: 100%;
  
  @media(min-width: 1400px){
    height: 261px;
    width: 1440px;
  }
`;