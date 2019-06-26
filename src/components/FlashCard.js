import React from 'react';
import { Card } from 'antd';
import { Markdown } from 'react-showdown';
import { Tag } from 'antd';

export const CARD_STATUS = {
  QUESTION: 'QUESTION',
  ANSWER: 'ANSWER'
};

const FlashCard = (props) => {
  const { card, cardStatus, onClick } = props;
  return (
    <div className="Card" onClick={onClick}>
      <Card>
        <div className="tags">{card.tags.map((tag) => <Tag>{tag}</Tag>)}</div>
        {cardStatus === CARD_STATUS.QUESTION
          ? (<div>Q:<Markdown markup={card.question} /></div>)
          : (<div>A:<Markdown markup={card.answer} /></div>)}
      </Card>
    </div>
  );
}

export default FlashCard;
