import { createContext, useContext, useEffect, useState } from 'react';

interface PropsCard {
  id: number;
  title: string;
  image: string;
}

type PropsContext = {
  cards: PropsCard[];
  setCards: (value: PropsCard[]) => void;
  saveCards: (value: PropsCard[]) => void;
  deleteCard: (value: number) => void;
}

const ContextProps = createContext<PropsContext>({
  cards: [],
  setCards: () => {},
  saveCards: () => {},
  deleteCard: () => {},
});

export const ProviderProps = ({children}: any) => {
 
  const [cards, setCards] = useState<PropsCard[]>([]);

  const saveCards = (cards: PropsCard[]) => {
    localStorage.setItem('@cards', JSON.stringify(cards));
  };

  const getCardsLocal = () => {
    const card = localStorage.getItem('@cards');
    if (card !== null) {
      const data = JSON.parse(card);
      setCards(data);
    }
  };

  const deleteCard = (id: number) => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
    saveCards(updatedCards);
  };

  useEffect(() => {
    if (cards.length > 0) {
      saveCards(cards);
    }
  }, [cards]);

  useEffect(() => {
    getCardsLocal();
  }, []);

  return (
    <ContextProps.Provider value={{cards, setCards, saveCards, deleteCard}}>
      {children}
    </ContextProps.Provider>
  );
};

export const useProps = () => useContext(ContextProps);
