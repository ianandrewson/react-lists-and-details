export default function getCards() {
  return fetch('https://api.magicthegathering.io/v1/cards')
    .then(res => res.json())
    .then(cards => cards.cards.map(card => ({
      name: card.name,
      manaCost: card.manaCost,
      type: card.type,
      rarity: card.rarity,
      setName: card.setName,
      text: card.text,
      flavor: card.flavor,
      imageUrl: card.imageUrl
    })));
}
