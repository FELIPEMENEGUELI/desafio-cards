import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #99999970;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #00000030;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1; 
  backdrop-filter: blur(0.8px);
`;

export const ContainerCard = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  padding: 0 30px;

  .icon-close{
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 10px;
    background-color: var(--color-orange);
    border-radius: 50px;
  }
`;

export const Create = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
  margin-bottom: 20px;

  button {
    background-color: transparent;
    border: none;
  }
`;
export const Icon = styled.img`
  width: 46px;
  height: 46px;
`;

export const Title = styled.span`
  color: var(--color-purple);
  font-size: 16px;

  @media(min-width: 768px){
    font-size: 30px;
    font-weight: 600;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    color: #454545;
    font-weight: bold;
    font-size: 12px;
  }

  @media(min-width: 768px){
    
    span {
      font-size: 14px;
    }
  }
`;

export const Input = styled.input`
  border: 1px solid #B9B9B9;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 10px;
  transition: box-shadow 0.3s ease, background-color 0.1s ease;
  
  &:focus {
    box-shadow: 0 0 8px #999999;
    background-color: #f0f8ff;
  }
  
  @media(min-width: 768px){
    height: 60px;
    font-size: 18px;
  }
`;

export const PositionButton = styled.div`
  align-self: flex-end;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Label = styled.label`
  border: 1px solid #B9B9B9;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  outline: none;
  transition: box-shadow 0.3s ease, background-color 0.1s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #999;
  justify-content: space-between;

  &:focus {
    box-shadow: 0 0 8px #999999;
    background-color: #f0f8ff;
  }

  button {
   display: none;
  }
  
  @media(min-width: 768px){
    height: 60px;
    font-size: 18px;
    
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      color: var(--color-orange);
      padding: 5px 10px;
      border-radius: 8px;
      border: 1px solid var(--color-orange);
      box-shadow: 1px 1px 5px  var(--color-orange);
      cursor: pointer;
      font-size: 18px;
      width: 224px;
      height: 48px;
    }
  }
`;