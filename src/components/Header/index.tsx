import { Container, ContainerText, Image, ImageLogo } from './style';
import { TextInput } from '../TextInput';
import BackgroundImage from '../../assets/backgound-image.png';
import LogoImpar from '../../assets/logo-teste.svg';

interface PropsHeader {
  inputName: string;
  setInputHeader: (e: any) => void;
}

export const Header = ({inputName, setInputHeader}: PropsHeader) => {
  
  return (
    <Container>
      <ContainerText>
        <ImageLogo src={LogoImpar} alt='Logo empresa ímpar.' />
      </ContainerText>

      <TextInput
        value={inputName}
        handleFunction={setInputHeader}
      />
      
      <Image src={BackgroundImage} alt='Imagem de fundo com pessoas.' />
    </Container>
  )
};
