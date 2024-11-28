import { BoxButtons, Button, Card, Image, Title, BoxButton, Line } from './style'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import LogoImpar from '../../assets/logo.png'

export const Cards = () => {
  return (
    <Card>
      <Image src={LogoImpar} alt="Imagem de exibição do card." />
      <Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum alias saepe, ad expedita fugiat sed nisi velit, sequi inventore recusandae repellendus sint laborum exercitationem! Temporibus sapiente nostrum officia nam eveniet?
      </Title>

      <BoxButtons>
        <BoxButton>
          <RiDeleteBin6Line color={"#f00"} size={10} />
          <Button color="#f00">Excluir</Button>
        </BoxButton>

        <Line />

        <BoxButton>
          <FiEdit2 color={"#E76316"} size={10} />
          <Button color="#E76316">Editar</Button>
        </BoxButton>
      </BoxButtons>
    </Card>
  )
}

