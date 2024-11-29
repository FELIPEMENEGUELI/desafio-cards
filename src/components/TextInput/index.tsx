import { Input, ContainerInput, Icon } from "./style";
import { FaSearch } from "react-icons/fa";
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
        <FaSearch color={"#999"} size={15} />
      </Icon>
    </ContainerInput>
  )
};
