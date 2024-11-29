import { BoxButtons, Button, Card, Image, Title, BoxButton, Line, Icon } from './style';
import LogoImpar from '../../assets/logo.png';
import Delete from '../../assets/icons/Icon-trash.svg';
import Edit from '../../assets/icons/Icon-edit.svg';

interface PropsCard {
  title: string;
  image: string;
  handleModal?: (value: boolean) => void;
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
          <Icon src={Delete} alt="icone de delete."/>
          <Button onClick={() => handleModal && handleModal(false)} color="#f00">Excluir</Button>
        </BoxButton>

        <Line />

        <BoxButton>
          <Icon src={Edit} alt="icone para editar." />
          <Button onClick={addCard} color="#E76316">Editar</Button>
        </BoxButton>
      </BoxButtons>
    </Card>
  )
};
