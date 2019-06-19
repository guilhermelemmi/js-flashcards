import React from 'react';
import Card from './Card';

const Problem = (props) => {
  return (
    <div className="Problem">
      <Card
        card={props.card}
        onSkip={props.onSkip}
      />
      <div className="Game-Index">
        Card {props.cardIndex + 1} / {props.cardsTotal}
      </div>
    </div>
  );
}

export default Problem;
