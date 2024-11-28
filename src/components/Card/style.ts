import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 1px 1px 5px #999;
`;

export const Image = styled.img`
  border-radius: 9999px;
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-top: 20px;
  align-self: center;
  border: 0.1px solid #999;
`;

export const Title = styled.span`
  font-size: 20px;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
  border-top: 0.1px solid #eeeeee90;
  background-color: #eeeeee99;
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 50%;
  color: #999;
  font-size: 18px;

  &:hover {
    color: ${(props) => props.color ? props.color : '#000' }
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 20px;
  background-color: #999;
`;
