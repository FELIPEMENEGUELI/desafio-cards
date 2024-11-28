import { Container, ContainerText, Image, ImageLogo, Title } from './style'
import { TextInput } from '../TextInput'
import BackgroundImage from '../../assets/backgound-image.jpg'
import LogoImpar from '../../assets/logo.png'
import { PropsHeader } from './type'

export const Header = ({ titleHeader }: PropsHeader) => {
  return (
    <Container>
      <ContainerText>
        <ImageLogo src={LogoImpar} alt='Logo empresa ímpar.' />
        <Title>
          {titleHeader}
        </Title>
      </ContainerText>

      <TextInput />
      
      <Image src={BackgroundImage} alt='Imagem de fundo com pessoas.' />
    </Container>
  )
}

