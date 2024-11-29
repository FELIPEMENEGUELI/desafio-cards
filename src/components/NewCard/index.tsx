import { ButtonCustomer } from "../ButtonCustomer";
import {
  Container, ContainerCard, Title, Create, Line, Forms,
  Input, PositionButton, InputFile, Label
} from "./style"
import { MdOutlinePostAdd } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface PropsNewCard {
  handleFunction: (e: any) => void;
  setInputCreate: (e: any) => void;
  imageSelected: File | null;
  inputCreate: string;
  addCard: () => void;
  openCreateCard: (value: boolean) => void;
}

export const NewCard = ({ handleFunction, imageSelected, inputCreate, setInputCreate, addCard, openCreateCard }: PropsNewCard) => {
  return (
    <Container>
      <ContainerCard>
        <IoMdCloseCircleOutline className="icon-close" size={25} color="#f00" onClick={() => openCreateCard(false)} />

        <Create>
          <MdOutlinePostAdd size={40} color="#999" />
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
              <button>Selecionar arquivo</button>
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
}

