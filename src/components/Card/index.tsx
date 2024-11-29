import { BoxButtons, Button, Card, Image, Title, BoxButton, Line } from './style';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import LogoImpar from '../../assets/logo.png';

interface PropsCard {
  title: string;
  image: string;
  handleModal: (value: boolean) => void;
  addCard: () => void;
}

export const Cards = ({ title, image, handleModal, addCard }: PropsCard) => {
  
  return (
    <Card>
      <Image src={image ? image : LogoImpar} alt="Imagem de exibição do card." />
      <Title>
        {title ? title : (
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        )}
      </Title>

      <BoxButtons>
        <BoxButton>
          <RiDeleteBin6Line color={"#f00"}  />
          <Button onClick={() => handleModal(false)} color="#f00">Excluir</Button>
        </BoxButton>

        <Line />

        <BoxButton>
          <FiEdit2 color={"#E76316"}  />
          <Button onClick={addCard} color="#E76316">Editar</Button>
        </BoxButton>
      </BoxButtons>
    </Card>
  )
};
