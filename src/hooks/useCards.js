import { useState, useEffect } from 'react';
import getCards from '../services/mtgApi.js';

export default function useCards() {
  //state goes here
  const [rawCards, setRawCards] = useState([]);

  //fetch goes here
  const fetchCards = () => {
    getCards()
      .then(res => setRawCards(res));
  };

  //useEffect goes here
  useEffect(() => {
    fetchCards();
  }, []);

  //any event handlers go here; will utilize setters of state

  //return listState and handlers here
  return { rawCards };
}
