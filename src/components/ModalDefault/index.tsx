import { Container, ContainerCard, Title, Create, Line, PositionButtons, Image, BoxImage } from "./style";
import { IoCloseSharp } from "react-icons/io5";
import { ButtonCustomer } from "../ButtonCustomer";
import ImagemDelete from '../../assets/delete.png';

interface PropsNewCard {
  closeCard: () => void;
}

export const ModalDefault = ({ closeCard }: PropsNewCard) => {

  return (
    <Container>
      <ContainerCard>
        <IoCloseSharp  
          className="icon-close" 
          size={20} 
          color="#FFF" 
          onClick={closeCard} 
        />
        <BoxImage>
          <Image src={ImagemDelete} alt="Imagem de lixeira simbolizando um icone."/>
        </BoxImage>

        <Create>
          <Title>Excluir</Title>
          <span>Certeza que deseja excluir?</span>

          <Line />

          <PositionButtons>
            <ButtonCustomer title="Excluir" color="#f00" />
            <ButtonCustomer handleFunction={closeCard} title="Cancelar" color="#fff" colorTitle="#f00"/>
            
          </PositionButtons>
        </Create>
      </ContainerCard>
    </Container>
  )
};
