import { Input, ContainerInput, Icon } from "./style";
import { FaSearch } from "react-icons/fa";

export const TextInput = () => {
  
  return (
    <ContainerInput>
      <Input
        placeholder='Digite aqui sua busca'
      />

      <Icon>
        <FaSearch color={"#999"} size={15} />
      </Icon>
    </ContainerInput>
  )
};
