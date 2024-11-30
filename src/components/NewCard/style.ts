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
  width: 1440px;
  height: 772px;
  background: #F6F4F6CC 0% 0% no-repeat padding-box;
`;

export const ContainerCard = styled.div`
  top: -2px;
  left: 798px;
  width: 642px;
  height: 767px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  opacity: 1;

  .icon-close{
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 10px;
    background-color: var(--cor-destaque);
    border-radius: 50px;
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
  font-size: 36px;
  opacity: 1;
  font-weight: 700;
  font-family: "Mulish", serif;
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
  font-size: 14px;
  background-color: #fff;
  font-weight: 600;
`;

export const Input = styled.input`
  margin-top: 12px;
  margin-left: 35px;
  width: 543px;
  height: 60px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  border: 1px solid #B9B9B9;
  border-radius: 8px;
  opacity: 1;
  font-size: 18px;
  padding-left: 25px;
  color: #757575;
  font-family: "Mulish", serif;
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 573px;
  margin-top: 12px;
  margin-left: 35px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  border: 1px solid #B9B9B9;
  border-radius: 8px;
  cursor: pointer;
`;

export const InputLabel = styled.input`
  display: none;;
`;

export const Label = styled.label`
  line-height: 60px; 
  font-family: "Mulish", serif;
  cursor: pointer;
  width: 224px;
  height: 46px;
  margin: 6px 8px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
  border: 1px solid var(--cor-destaque);
  box-shadow: 0px 3px 6px #E763162E;
  border: 1px solid #E76316;
  border-radius: 8px;
  color: var(--cor-destaque);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const TitleInput = styled.span`
  margin-left: 15px;
  font-size: 16px;
  color: #757575;
  font-family: "Mulish", serif;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
`;

export const PositionButton = styled.div`
  margin-left: 435px;
  margin-top: 26px;
  background: var(--cor-branco) 0% 0% no-repeat padding-box;
`;

interface PropsLine {
  margin?: string;
}

export const Line = styled.div<PropsLine>`
  margin-top: ${(props) => !props.margin ? '30px' : props.margin};
  margin-left: 32px;
  width: 572px;
  height: 0px;
  border: 1px solid #D4D4D4;
`;
