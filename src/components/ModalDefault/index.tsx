import { Container, ContainerCard, Title, Create, Line, PositionButtons, Image, BoxImage } from "./style";
import { IoCloseSharp } from "react-icons/io5";
import { ButtonCustomer } from "../ButtonCustomer";
import ImagemDelete from '../../assets/delete.png';
import { useProps } from "../../hooks/useProps";

interface PropsNewCard {
  closeCard: (value: boolean) => void;
  cardId: number | null;
}

export const ModalDefault = ({ closeCard, cardId }: PropsNewCard) => {

  const {deleteCard} = useProps();

  const handleDelete = () => {
    if (cardId !== null) {
      deleteCard(cardId);
      closeCard(false);
    }
  };

  return (
    <Container>
      <ContainerCard>
        <IoCloseSharp  
          className="icon-close" 
          size={20} 
          color="#FFF" 
          onClick={() => closeCard(false)} 
        />
        <BoxImage>
          <Image src={ImagemDelete} alt="Imagem de lixeira simbolizando um icone."/>
        </BoxImage>

        <Create>
          <Title>Excluir</Title>
          <span>Certeza que deseja excluir?</span>

          <Line />

          <PositionButtons>
            <ButtonCustomer handleFunction={handleDelete} title="Excluir" color="#f00" />
            <ButtonCustomer handleFunction={() => closeCard(false)} title="Cancelar" color="#fff" colorTitle="#f00"/>
            
          </PositionButtons>
        </Create>
      </ContainerCard>
    </Container>
  )
};
