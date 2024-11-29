import { ButtonCustomer } from "../ButtonCustomer";
import { Container, ContainerCard, Title, Create, Line, Forms,
  Input, PositionButton, InputFile, Label, Icon } from "./style";
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
  closeCard }: PropsNewCard) => {

  return (
    <Container>
      <ContainerCard>

        <IoCloseSharp  
          className="icon-close" 
          size={30} 
          color="#FFF" 
          onClick={() => closeCard(false)} 
        />

        <Create>
          <Icon src={IconCreate} alt="Icone de criar." />
          <Title>Criar card</Title>
        </Create>

        <Line />

        <Forms>
          <div>
            <span>Digite um nome para o card</span>
            <Input
              onChange={(e) => setInputCreate(e.target.value)}
              value={inputCreate}
              placeholder="Digite o titulo"
            />
          </div>

          <div>
            <span>Inclua uma imagem para aparecer no card</span>

            <InputFile
              type="file"
              id="file"
              accept="image/*"
              onChange={handleFunction}
            />
            <Label htmlFor="file">
              {imageSelected ? imageSelected?.name : 'Nenhum arquivo selecionado'}
              <button onClick={() => document.getElementById("file")?.click()}>Selecionar arquivo</button>
            </Label>
          </div>

          <Line />

          <PositionButton>
            <ButtonCustomer handleFunction={addCard} title="Criar card" />
          </PositionButton>
        </Forms>
      </ContainerCard>
    </Container>
  )
};
