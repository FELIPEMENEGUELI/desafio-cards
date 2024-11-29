import { Container, ContainerCard, Title, BoxDelete, Line, PositionButtons, Image, BoxImage, Button } from "./style";
import { IoCloseSharp } from "react-icons/io5";
import { useProps } from "../../hooks/useProps";
import Delete from '../../assets/icons/Icon-trash.svg';

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
          <Image src={Delete} alt="Imagem de lixeira simbolizando um icone."/>
        </BoxImage>

        <BoxDelete>
          <Title>Excluir</Title>
          <span>Certeza que deseja excluir?</span>

          <Line />

          <PositionButtons>
            <Button backgroundColor="#f00" onClick={handleDelete}>
              Excluir
            </Button>

            <Button borderColor="#f00" color="#f00" onClick={() => closeCard(false)}>
              Cancelar
            </Button>
          </PositionButtons>
        </BoxDelete>
      </ContainerCard>
    </Container>
  )
};
