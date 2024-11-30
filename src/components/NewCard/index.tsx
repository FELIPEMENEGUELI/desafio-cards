import { ButtonCustomer } from "../ButtonCustomer";
import { Container, ContainerCard, Title, Line, Input, PositionButton, Label, Icon,
  TitleLabel, BoxInput, InputLabel, TitleInput } from "./style";
import IconCreate from "../../assets/icons/icone_criar.svg";
import { IoCloseSharp } from "react-icons/io5";

interface PropsNewCard {
  handleFunction: (e: any) => void;
  setInputCreate: (e: any) => void;
  imageSelected: File | null;
  inputCreate: string;
  addCard: () => void;
  closeCard: (value: boolean) => void;
}

export const NewCard = ({
  handleFunction,
  imageSelected,
  inputCreate,
  setInputCreate,
  addCard,
  closeCard,
 }: PropsNewCard) => {

  return (
    <Container>
      <ContainerCard>

        <IoCloseSharp
          className="icon-close"
          size={30}
          color="#FFF"
          onClick={() => closeCard(false)}
        />

        <Icon src={IconCreate} alt="Icone de criar." />
        <Title>Criar card</Title>

        <Line />

        <TitleLabel>Digite um nome para o card</TitleLabel>
        <Input
          onChange={(e: any) => setInputCreate(e.target.value)}
          value={inputCreate}
          placeholder="Digite o título"
        />

        <TitleLabel>Inclua uma imagem para aparecer no card</TitleLabel>
        <BoxInput onClick={() => document.getElementById("file")?.click()}>
          <InputLabel
            type="file"
            id="file"
            accept="image/*"
            className="hidden-input"
            onChange={handleFunction}
          />

          <TitleInput className="file-name">{imageSelected ? imageSelected?.name : 'Nenhum arquivo selecionado'}</TitleInput>
          <Label htmlFor="file" onClick={(e) => e.stopPropagation()}>
            Escolher arquivo
          </Label>
        </BoxInput>
      
        <Line margin="50px" />
      
        <PositionButton>
          <ButtonCustomer title="Criar card" handleFunction={addCard}/>
        </PositionButton>
      </ContainerCard>
    </Container>
  )
};
