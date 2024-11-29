import { Button } from './style';

interface PropsButton {
  handleFunction?: () => void;
  title: string;
  color?: string;
  colorTitle?: string;
}

export const ButtonCustomer = ({handleFunction, title, color, colorTitle}: PropsButton) => {
  
  return (
    <Button color={color} title={colorTitle} onClick={handleFunction}>{title}</Button>
  )
};
