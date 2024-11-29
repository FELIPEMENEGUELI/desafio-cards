import { Container, ContainerText, Image, ImageLogo, Title } from './style';
import { TextInput } from '../TextInput';
import BackgroundImage from '../../assets/backgound-image.jpg';
import LogoImpar from '../../assets/logo.png';

interface PropsHeader {
  inputName: string;
  setInputHeader: (e: any) => void;
}

export const Header = ({inputName, setInputHeader}: PropsHeader) => {
  
  return (
    <Container>
      <ContainerText>
        <ImageLogo src={LogoImpar} alt='Logo empresa ímpar.' />
        <Title>
          Teste Ímpar
        </Title>
      </ContainerText>

      <TextInput
        value={inputName}
        handleFunction={setInputHeader}
      />
      
      <Image src={BackgroundImage} alt='Imagem de fundo com pessoas.' />
    </Container>
  )
};
