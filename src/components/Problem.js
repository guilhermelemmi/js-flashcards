import React from 'react';
import { Button } from 'antd';
import FlashCard from './FlashCard';

const Problem = (props) => {
  const {
    card,
    onWrongAnswer,
    onRightAnswer,
    onPreviousButton,
    onNextButton,
  } = props;

  return (
    <div className="Problem">
      <div className="Game-Index">
        Card {props.cardIndex + 1} / {props.cardsTotal}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button
          onClick={onPreviousButton}
          shape="circle"
          icon='left'
          alt="Previous Card"
          title="Previous Card"
          size="large"
          style={{marginRight: 10 }}
        />
        <FlashCard
          card={card}
          onWrongAnswer={onWrongAnswer}
          onRightAnswer={onRightAnswer}
        />
        <Button
          onClick={onNextButton}
          shape="circle"
          icon='right'
          alt="Next Card"
          title="Next Card"
          size="large"
          style={{marginRight: 10 }}
        />
      </div>
    </div>
  );
}

export default Problem;
