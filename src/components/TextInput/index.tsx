import { Input, ContainerInput, Icon, IconStyle } from "./style";
import FaSearch from "../../assets/icons/lupa.svg";

interface PropsInput {
  value: string;
  handleFunction: (e: any) => void;
}

export const TextInput = ({value, handleFunction}: PropsInput) => {
  
  return (
    <ContainerInput>
      <Input
        onChange={(e) => handleFunction(e.target.value)}
        value={value}
        placeholder='Digite aqui sua busca'
      />

      <Icon>
        <IconStyle src={FaSearch} alt="Icone de lupa." />
      </Icon>
    </ContainerInput>
  )
};
