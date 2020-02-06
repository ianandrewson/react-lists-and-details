import React from 'react';
import CardItem from '../CardItem/CardItem.js';
import useCards from '../../hooks/useCards.js';

export default function CardList(){
  const { rawCards } = useCards();

  const cards = rawCards.map((card, i) => (
    <li key={i}>
      <CardItem info={card}/>
    </li>
  ));

  return (
    <>
      <h1>This is the List of Cards</h1>
      {cards}
    </>
  );
}
