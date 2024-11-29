import { Button } from './style'

interface PropsButton {
  handleFunction?: () => void;
  title: string;
}

export const ButtonCustomer = ({handleFunction, title}: PropsButton) => {
  return (
    <Button onClick={handleFunction}>{title}</Button>
  )
}

