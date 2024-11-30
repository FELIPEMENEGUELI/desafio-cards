import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: 1746px;
  height: 100%;
  background: #F6F4F6 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Box = styled.div`
  opacity: 1;
  margin-left: 158px;
  width: 1056px;
  height: 1218px;
  margin-top: 30px;
`;

export const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleSearch = styled.span`
  left: 168px;
  height: 40px;
  text-align: left;
  font: 32px/40px Muli;
  color: #5F1478;
  opacity: 1;
  font-family: "Mulish", serif;
`;

export const UlCards = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap; 
  margin-top: 10px;
  padding-bottom: 20px;
  justify-content: space-between;
  
  @media(min-width: 768px){
    justify-content: flex-start;
  }

  @media(min-width: 1089px){
    margin-top: 20px;
    gap: 37px;
  }

    /* top: 375px;
left: 158px;
width: 1056px;
height: 1218px;
background-color: red; */
`;



// export const ContainerCards = styled.div`
//   display: flex;
//   width: 95%;
//   margin-top: 20px;
  
//   @media(min-width: 1089px){
//     width: 1056px;
//   }
// `;




// export const PositionCards = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;



// export const Image = styled.img`
//   width: 100%;
//   height: 70%;
// `;