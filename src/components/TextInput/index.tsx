import { Input, IconStyle } from "./style";
import FaSearch from "../../assets/icons/lupa.svg";

interface PropsInput {
  value: string;
  handleFunction: (e: any) => void;
}

export const TextInput = ({value, handleFunction}: PropsInput) => {
  
  return (
    <>
      <Input
        onChange={(e) => handleFunction(e.target.value)}
        value={value}
        placeholder='Digite aqui sua busca...'
      />
      <IconStyle src={FaSearch} alt="Icone de lupa." />
    </>
  )
};
