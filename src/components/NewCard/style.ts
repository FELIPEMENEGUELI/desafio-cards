import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #00000030;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1; 
  width: 100%;
  height: 772px;
  background: #F6F4F6CC 0% 0% no-repeat padding-box;
  
  @media(min-width: 1400px){
    width: 1440px;
  }
`;

export const ContainerCard = styled.div`
  top: -2px;
  left: 798px;
  width: 302px;
  height: 767px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  opacity: 1;

  .icon-close{
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: var(--cor-destaque);
    border-radius: 50px;
  }
  
  @media(min-width: 1400px){
    width: 642px;
    
    .icon-close{
      right: 30px;
    }
  }
`;

export const Icon = styled.img`
  margin-top: 41px;
  margin-left: 32px;
  margin-right: 18px;
  width: 46px;
  height: 46px;
  background: transparent 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Title = styled.span`
  background-color: var(--cor-branco);
  color: #5F1478;
  font-size: 26px;
  opacity: 1;
  font-weight: 700;
  font-family: "Mulish", serif;
  
  @media(min-width: 1400px){
    font-size: 36px;
  }
`;

export const TitleLabel = styled.div`
  margin-top: 50px;
  margin-left: 35px;
  height: 18px;
  text-align: left;
  letter-spacing: 0px;
  color: #454545;
  text-transform: uppercase;
  font-family: "Mulish", serif;
  opacity: 1;
  font-size: 10px;
  background-color: #fff;
  font-weight: 600;
  
  @media(min-width: 1400px){
    font-size: 14px;
  }
`;

export const Input = styled.input`
  margin-top: 12px;
  margin-left: 35px;
  width: 200px;
  height: 25px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  border: 1px solid #B9B9B9;
  border-radius: 8px;
  opacity: 1;
  font-size: 14px;
  padding-left: 25px;
  color: #757575;
  font-family: "Mulish", serif;
  
  @media(min-width: 1400px){
    font-size: 18px;
    width: 543px;
    height: 60px;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  margin-top: 12px;
  margin-left: 35px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  border: 1px solid #B9B9B9;
  border-radius: 8px;
  cursor: pointer;

  @media(min-width: 1400px){
    width: 543px;
    height: 60px;
  }
`;

export const InputLabel = styled.input`
  display: none;;
`;

export const Label = styled.label`
  line-height: 60px; 
  font-family: "Mulish", serif;
  cursor: pointer;
  width: 224px;
  height: 25px;
  margin: 6px 8px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  border: 1px solid var(--cor-destaque);
  box-shadow: 0px 3px 6px #E763162E;
  border: 1px solid #E76316;
  border-radius: 8px;
  color: var(--cor-destaque);
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  @media(min-width: 1400px){
    font-size: 18px;
    width: 224px;
    height: 46px;
  }
`;

export const TitleInput = styled.span`
  margin-left: 15px;
  font-size: 10px;
  color: #757575;
  font-family: "Mulish", serif;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;

  @media(min-width: 1400px){
    font-size: 16px;
  }
`;

export const PositionButton = styled.div`
  margin-left: 135px;
  margin-top: 26px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  
  @media(min-width: 1400px){
    margin-left: 435px;
  }
`;

interface PropsLine {
  margin?: string;
}

export const Line = styled.div<PropsLine>`
  margin-top: ${(props) => !props.margin ? '30px' : props.margin};
  margin-left: 50px;
  width: 200px;
  height: 0px;
  border: 1px solid #D4D4D4;
  
  @media(min-width: 1400px){
    margin-left: 32px;
    width: 572px;
  }
`;
