import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, var(--cor-primaria), var(--cor-secundaria));
  width: 1440px;
  height: 64px;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  position: absolute;
  top: 0;
`;

export const ImageLogo = styled.img`
  margin-top: 14px;
  margin-left: 24px;
  width: 192px;
  height: 37px;
  background: transparent 0% 0% no-repeat padding-box;
`;

export const Image = styled.img`
  width: 1440px;
  height: 261px;
  object-fit: contain;
`;