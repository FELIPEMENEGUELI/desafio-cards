import { Container, ContainerCard, Title, BoxDelete, Line, PositionButtons, Image, BoxImage, Button } from "./style";
import { IoCloseSharp } from "react-icons/io5";
import Delete from '../../assets/icons/Icon-trash.svg';

interface PropsNewCard {
  closeCard: (value: boolean) => void;
}

export const ModalDefault = ({ closeCard }: PropsNewCard) => {

  const closePokemon = () => {
    alert("Funcionalidade de delete ainda não foi implementada.");
    closeCard(false);
  };

  return (
    <Container>
      <ContainerCard>
        <IoCloseSharp
          className="icon-close"
          size={20}
          color="#FFF"
          onClick={() => closeCard && closeCard(false)}
        />
        <BoxImage>
          <Image src={Delete} alt="Imagem de lixeira simbolizando um icone." />
        </BoxImage>

        <BoxDelete>
          <Title>Excluir</Title>
          <span>Certeza que deseja excluir?</span>

          <Line />

          <PositionButtons>
            <Button backgroundColor="#f00" onClick={closePokemon}>
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
