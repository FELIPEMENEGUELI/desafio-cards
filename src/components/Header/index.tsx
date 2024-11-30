import { Container, Image, ImageLogo } from './style';
import { TextInput } from '../TextInput';
import BackgroundImage from '../../assets/fundo-busca.png';
import LogoImpar from '../../assets/logo-teste.png';

interface PropsHeader {
  inputName: string;
  setInputHeader: (e: any) => void;
}

export const Header = ({ inputName, setInputHeader }: PropsHeader) => {

  return (
    <>
      <Container>
        <ImageLogo src={LogoImpar} alt='Logo empresa ímpar.' />
      </Container>

      <TextInput
        value={inputName}
        handleFunction={setInputHeader}
      />
      
      <Image src={BackgroundImage} alt='Imagem de fundo com pessoas.' />
    </>
  )
};
