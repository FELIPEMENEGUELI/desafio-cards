import { useState } from 'react'
import { ButtonCustomer } from '../../components/ButtonCustomer'
import { Cards } from '../../components/Card'
import { Header } from '../../components/Header'
import { BoxMain, Container, ContainerCards, BoxSearch, PositionCards } from './style'
import { NewCard } from '../../components/NewCard'

interface PropsCard {
  title: string;
  image: string;
}

export const Home = () => {

  const [openNewCard, setOpenNewCard] = useState<boolean>(false);
  const [imageSelected, setImageSelected] = useState<File | null>(null);
  const [inputCreate, setInputCreate] = useState<string>('')

  const [cards, setCards] = useState<PropsCard[]>([]);

  const openCreateCard = () => setOpenNewCard(!openNewCard)

  const handleFile = (e: any) => {
    const file = e.target.files[0] || null;
    setImageSelected(file)
    console.log('Arquivo carregado:', file)
  }

  const addCard = () => {
    if (!inputCreate || !imageSelected) { 
      alert("Por favor, preencha todos os campos antes de continuar!");
      return;
    }
  
    const data = {
      title: inputCreate,
      image: URL.createObjectURL(imageSelected),
    };

    setCards([...cards, data]);

    console.log("Arquivo carregado:", data);
    setInputCreate("");
    setImageSelected(null)
    setOpenNewCard(!openNewCard)
  };

  return (
    <Container>
      <Header />
      <BoxMain>
        <ContainerCards>
          <BoxSearch>
            <span>Resultados da busca</span>
            <ButtonCustomer title="Novo card" handleFunction={openCreateCard} />
          </BoxSearch>

          <PositionCards>
            {cards.map((card, index) => (
              <Cards key={index} data={card} />
            ))}

          </PositionCards>
        </ContainerCards>
      </BoxMain>

      {openNewCard &&
        <NewCard
          handleFunction={handleFile}
          imageSelected={imageSelected}
          inputCreate={inputCreate}
          setInputCreate={setInputCreate}
          addCard={addCard}
          openCreateCard={openCreateCard}
        />
      }
    </Container>
  )
}

