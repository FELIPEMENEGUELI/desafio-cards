import { useEffect, useState } from 'react';
import { ButtonCustomer } from '../../components/ButtonCustomer';
import { Cards } from '../../components/Card';
import { Header } from '../../components/Header';
import { ModalDefault } from '../../components/ModalDefault';
import { NewCard } from '../../components/NewCard';
import { useProps } from '../../hooks/useProps';
import { Api } from '../../services/Api';
import { GetAllPokemons } from '../../services/GetApi';
import { Box, BoxMain, Container, TitleSearch, UlCards } from './style';

interface PropsApi {
  name: string;
  url?: string;
  sprites: string;
}

export const Home = () => {

  const { cards, setCards } = useProps();
  const [openNewCard, setOpenNewCard] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSelected, setImageSelected] = useState<File | null>(null);
  const [inputCreate, setInputCreate] = useState<string>('')
  const [inputHeader, setInputHeader] = useState<string>('')
  const [dataPokemon, setDataPokemon] = useState<PropsApi[]>([]);

  const openCreateCard = () => setOpenNewCard(!openNewCard);

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
      name: inputCreate,
      url: URL.createObjectURL(imageSelected),
    };

    setCards([...cards, data]);
    setInputCreate("");
    setImageSelected(null)
    setOpenNewCard(!openNewCard)
  };

  const loadApi = async () => {

    const response = await GetAllPokemons();

    if (response && response.status === 200) {
      const data = response.data;

      const promises = data.results.map(async (pokemon: any) => {
        const response = await Api(pokemon.url);
        return response.data;
      });

      const results = await Promise.all(promises);
      setDataPokemon(results);

    } else {
      alert("Aconteceu algum imprevisto, entre em contato para saber mais!");
    }
  }

  const dataFilters = [...cards, ...dataPokemon];

  const resultInputFilter = dataFilters.filter((card) => {
    const inputName = inputHeader.toLowerCase();
    const nameCard = card.name.toLowerCase();
    return nameCard.includes(inputName);
  });

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <Container>
      <Header inputName={inputHeader} setInputHeader={setInputHeader} />
      <Box>
        <BoxMain>
          <TitleSearch>Resultados da busca</TitleSearch>
          <ButtonCustomer title="Novo card" handleFunction={openCreateCard} />
        </BoxMain>

        <UlCards>
          {resultInputFilter.map((card, index) => (
            <Cards
              key={index}
              name={card.name}
              urlPokemon={card}
              url={card.url}
              openModal={setOpenModal}
            />
          )
          )}
        </UlCards>
      </Box>


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

      {openModal && <ModalDefault closeCard={setOpenModal} />}

    </Container>
  )
};
