import { BoxButtons, Button, Card, Image, Title, Line, Icon, LineVertical } from './style';
import LogoImpar from '../../assets/logo.png';
import Delete from '../../assets/icons/Icon-trash.svg';
import Edit from '../../assets/icons/Icon-edit.svg';
import HandFish from '../../assets/icons/icone.svg'

interface PropsCard {
  name: string;
  urlPokemon?: string | any;
  openModal: (value: boolean) => void;
  url?: string;
}

export const Cards = ({ name, urlPokemon, openModal, url }: PropsCard) => {

  const image = urlPokemon?.sprites?.front_shiny || url || LogoImpar;

  const handleFunction = () => {
    openModal(true);
  }

  const editCard = () => {
    alert("Funcionalidade de editar ainda não foi implementada.");
    openModal(false);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    e.currentTarget.src = HandFish;
  }

  return (
    <Card>
      <Image src={image} alt="Imagem de exibição do card." onError={handleImageError} />

      <Line />

      <Title>
        {name ? name.split('-')[0] : ("Lorem ipsum dolor sit amet consectetur.")}
      </Title>

      <BoxButtons>
        <Button onClick={handleFunction} color="#f00">
          <Icon src={Delete} alt="icone de delete." />
          Excluir
        </Button>

        <LineVertical />

        <Button onClick={editCard} color="#E76316">
          <Icon src={Edit} alt="icone para editar." />
          Editar
        </Button>
      </BoxButtons>
    </Card>
  )
};
