import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1746px;
  background: #F6F4F6 0% 0% no-repeat padding-box;
  opacity: 1;

  @media(min-width: 1400px) {
    width: 1440px;
  }
`;

export const Box = styled.div`
  opacity: 1;
  width: 100%;
  height: 1218px;
  margin-top: 30px;
  
  @media(min-width: 1400px) {
    margin-left: 158px;
    width: 1056px;
  }
`;

export const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  
  @media(min-width: 768px) {
    padding-left: 20px;
    padding-right: 30px;
  }

  @media(min-width: 1400px) {
    padding: 0;
  }
`;

export const TitleSearch = styled.span`
  left: 168px;
  height: 40px;
  text-align: left;
  font: 16px;
  color: #5F1478;
  opacity: 1;
  font-family: "Mulish", serif;
  
  @media(min-width: 1400px){
    font-size: 32px;
  }
`;

export const UlCards = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  margin-top: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
  
  @media(min-width: 1400px){
    padding-left: 0;
    justify-content: space-between;
    gap: 25px;
  }
`;
