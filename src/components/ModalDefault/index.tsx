import { Container, ContainerCard, Title, Line, Image, BoxImage, Button, ConfirmDelete } from "./style";
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
        <button onClick={() => closeCard && closeCard(false)} className="icon-close">X</button>

        <BoxImage>
          <Image src={Delete} alt="Imagem de lixeira simbolizando um icone." />
        </BoxImage>

        <Title>Excluir</Title>
        <ConfirmDelete>Certeza que deseja excluir?</ConfirmDelete>

        <Line />

        <Button backgroundColor="#DB2525" marginLeft="49px" onClick={closePokemon}>
          Excluir
        </Button>

        <Button borderColor="#f00" color="#f00" marginLeft="17px" onClick={() => closeCard(false)}>
          Cancelar
        </Button>
      </ContainerCard>
    </Container>
  )
};
