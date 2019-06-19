import React, { Component } from 'react';
import { Button } from 'antd';

const CARD_STATUS = {
  QUESTION: 'QUESTION',
  ANSWER: 'ANSWER'
};

class Card extends Component {

  state = {
    cardStatus: CARD_STATUS.QUESTION
  };

  renderQuestion = () => {
    return (
      <p>{this.props.card.question}</p>
    );
  }

  renderAnswer = () => {
    return (
      <p>{this.props.card.answer}</p>
    );
  }

  renderContent = () => {
    switch (this.state.cardStatus) {
      case CARD_STATUS.QUESTION:
        return this.renderQuestion();
      case CARD_STATUS.ANSWER:
        return this.renderAnswer();
      default:
        return null;
    }
  }

  render() {
    const {
      onSkip
    } = this.props;

    return (
      <div className="Card">
        {this.renderContent()}
        <Button type="danger">Flag</Button>
        <Button type="primary" onClick={onSkip}>Skip</Button>
      </div>
    );
  }
}

export default Card;
