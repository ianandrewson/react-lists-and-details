const getCards = () => {
  return Promise.resolve([
    { card: 'Best card in the game', power: 'infinity' },
    { card: 'Banned card', power: 'A Million' }
  ]);
};

export default getCards;
