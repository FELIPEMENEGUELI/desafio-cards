import { useState } from 'react';
import { ButtonCustomer } from '../../components/ButtonCustomer';
import { Cards } from '../../components/Card';
import { Header } from '../../components/Header';
import { BoxMain, Container, ContainerCards, BoxSearch, PositionCards, TitleSearch, UlCards } from './style';
import { NewCard } from '../../components/NewCard';
import { ModalDefault } from '../../components/ModalDefault';
import { useProps } from '../../hooks/useProps';
import { dataCard } from '../../hooks/data';

export const Home = () => {

  const { cards, setCards } = useProps();
  const [openNewCard, setOpenNewCard] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSelected, setImageSelected] = useState<File | null>(null);
  const [inputCreate, setInputCreate] = useState<string>('')
  const [inputHeader, setInputHeader] = useState<string>('')
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const openCreateCard = () => setOpenNewCard(!openNewCard)

  const openModalDelete = (id: number) => {
    setSelectedCardId(id);
    setOpenModal(!openModal);
  };

  const handleFile = (e: any) => {
    const file = e.target.files[0] || null;
    setImageSelected(file)
  }

  const addCard = () => {
    if (!inputCreate || !imageSelected) {
      alert("Por favor, preencha todos os campos antes de continuar!");
      return;
    }

    const data = {
      id: cards.length + 1,
      title: inputCreate,
      image: URL.createObjectURL(imageSelected),
    };

    setCards([...cards, data]);

    setInputCreate("");
    setImageSelected(null)
    setOpenNewCard(!openNewCard)
  };

  const concatArray = dataCard.concat(cards);

  const resultInputFilter = concatArray.filter((card) => {
    const inputName = inputHeader.toLowerCase();
    const nameCard = card.title.toLowerCase();
    return nameCard.includes(inputName);
  });

  return (
    <Container>
      <Header inputName={inputHeader} setInputHeader={setInputHeader} />
      <BoxMain>
        <ContainerCards>
          <PositionCards>
            <BoxSearch>
              <TitleSearch>Resultados da busca</TitleSearch>
              <ButtonCustomer title="Novo card" handleFunction={openCreateCard} />
            </BoxSearch>

            <UlCards>
              {resultInputFilter.map((card, index) => (
                <Cards
                  key={index}
                  title={card.title}
                  image={card.image}
                  addCard={openCreateCard}
                />
              ))}

              {cards.map((card, index) => (
                <Cards
                  key={index}
                  title={card.title}
                  image={card.image}
                  handleModal={() => openModalDelete(card.id)}
                  addCard={openCreateCard}
                />
              ))}
            </UlCards>
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
          closeCard={setOpenNewCard}
        />
      }

      {openModal &&
        <ModalDefault cardId={selectedCardId} closeCard={setOpenModal} />
      }
    </Container>
  )
};
