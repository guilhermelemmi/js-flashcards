import React from 'react';
import FlashCard from './FlashCard';

const Problem = (props) => {
  const {
    card,
    onSkipQuestion,
    onNextQuestion,
    onRaiseFlag
  } = props;

  return (
    <div className="Problem">
      <FlashCard
        card={card}
        onSkipQuestion={onSkipQuestion}
        onNextQuestion={onNextQuestion}
        onRaiseFlag={onRaiseFlag}
      />
      <div className="Game-Index">
        Card {props.cardIndex + 1} / {props.cardsTotal}
      </div>
    </div>
  );
}

export default Problem;
