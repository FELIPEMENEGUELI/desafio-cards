import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 125px;
  height: 185px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 5px #999;
  
  @media(min-width: 768px) {
    width: 185px;
    height: 225px;
  }

  @media(min-width: 1089px) {
    width: 234px;
    height: 267px;
  }
`;

export const Image = styled.img`
  border-radius: 9999px;
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-top: 20px;
  align-self: center;
  border: 0.1px solid #E4E4E4;
  background-color: #F6F4F6;

  @media(min-width: 768px) {
    width: 95px;
    height: 95px;
  }
`;

export const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--color-purple);
  font-size: 12px;
  text-align: center;
  align-self: center;
  width: 80px;
  
  @media(min-width: 768px) {
    font-size: 16px;
    width: 100px;
  }
  
  @media(min-width: 1089px) {
    font-size: 20px;
    width: 150px;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-top: 0.1px solid #eeeeee90;
  background-color: #eeeeee99;

  @media(min-width: 768px){
    padding: 15px 20px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  
  @media(min-width: 768px){
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 50%;
  color: #999;
  font-size: 10px;
  
  &:hover {
    color: ${(props) => props.color ? props.color : '#000'}
  }
  
  @media(min-width: 768px) {
    font-size: 16px;
  }

  @media(min-width: 1089px) {
    font-size: 20px;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 20px;
  background-color: #999;
`;

export const Icon = styled.img`
  width: 10px;
    
  @media(min-width: 768px) {
    width: 14px;
  }

  @media(min-width: 1089px) {
    width: 15px;
  }
`;