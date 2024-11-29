import { BoxButtons, Button, Card, Image, Title, BoxButton, Line } from './style'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import LogoImpar from '../../assets/logo.png'
interface PropsCard {
  data: {
    title: string;
    image: string;
  }
}

export const Cards = ({ data }: PropsCard) => {
  return (
    <Card>
      <Image src={data.image ? data.image : LogoImpar} alt="Imagem de exibição do card." />
      <Title>
        {data.title ? data.title : (
          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        )}
      </Title>

      <BoxButtons>
        <BoxButton>
          <RiDeleteBin6Line color={"#f00"}  />
          <Button color="#f00">Excluir</Button>
        </BoxButton>

        <Line />

        <BoxButton>
          <FiEdit2 color={"#E76316"}  />
          <Button color="#E76316">Editar</Button>
        </BoxButton>
      </BoxButtons>
    </Card>
  )
}

