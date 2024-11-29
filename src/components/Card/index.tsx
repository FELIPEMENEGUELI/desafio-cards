import { BoxButtons, Button, Card, Image, Title, BoxButton, Line, Icon } from './style';
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

      <Title>
        {name ? name : (
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        )}
      </Title>

      <BoxButtons>
        <BoxButton>
          <Icon src={Delete} alt="icone de delete." />
          <Button
            onClick={handleFunction}
            color="#f00">
            Excluir
          </Button>
        </BoxButton>

        <Line />

        <BoxButton>
          <Icon src={Edit} alt="icone para editar." />
          <Button onClick={editCard} color="#E76316">Editar</Button>
        </BoxButton>
      </BoxButtons>
    </Card>
  )
};
