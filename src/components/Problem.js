import React, { Component } from 'react';
import { Button } from 'antd';
import FlashCard, { CARD_STATUS } from './FlashCard';

class Problem extends Component {

  state = {
    cardStatus: CARD_STATUS.QUESTION
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ cardStatus: CARD_STATUS.QUESTION });
    }
  }

  flipCard = () => {
    switch (this.state.cardStatus) {
      case CARD_STATUS.QUESTION:
        this.setState({ cardStatus: CARD_STATUS.ANSWER });
        break;
      case CARD_STATUS.ANSWER:
        this.setState({ cardStatus: CARD_STATUS.QUESTION });
        break;
      default:
    }
  }

  render () {
    const {
      card,
      cardsTotal,
      cardIndex,
      answer,
      onNegativeAnswer,
      onPositiveAnswer,
      onPreviousButton,
      onNextButton,
    } = this.props;
  
    return (
      <div className="Problem">
        <div className="Game-Index">
          Card {cardIndex + 1} / {cardsTotal}
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
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
            cardStatus={this.state.cardStatus}
            onClick={this.flipCard}
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
        <div className="FlashCard-Actions">
          <Button
            id="btnNegativeAnswer"
            type="primary"
            className={answer === false ? 'btnSelected' : ''}
            onClick={onNegativeAnswer}
            shape="circle"
            icon='dislike'
            alt="I don't know :("
            title="I don't know :("
            size="large"
            style={{marginRight: 30, backgroundColor: '#ff4d4f', border: '1px solid #ff4d4f'}}
          />
          <Button
            onClick={this.flipCard}
            className="btnFlip"
            shape="circle"
            icon='retweet'
            alt="Flip Card"
            title="Flip Card"
            size="large"
          />
          <Button
            id="btnPositiveAnswer"
            type="primary"
            className={answer === true ? 'btnSelected' : ''}
            onClick={onPositiveAnswer}
            shape="circle"
            icon='like'
            alt="I know this one!"
            title="I know this one!"
            size="large"
            style={{marginLeft: 30}}
          />
        </div>
      </div>
    );
  }
}

export default Problem;
