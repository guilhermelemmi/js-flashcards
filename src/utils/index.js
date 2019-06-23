import jsDeck from './../data/cards.js';

export default {
  getCards: () => {
    const shuffled = jsDeck.cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  },
};
