import React, { Component } from 'react';
import { Button } from 'antd';
import { Card } from 'antd';
import { Markdown } from 'react-showdown';

const CARD_STATUS = {
  QUESTION: 'QUESTION',
  ANSWER: 'ANSWER'
};

class FlashCard extends Component {

  state = {
    cardStatus: CARD_STATUS.QUESTION
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ cardStatus: CARD_STATUS.QUESTION });
    }
  }

  renderQuestion = () => {
    return (
      <p>
        <Markdown markup={this.props.card.question} />
      </p>
    );
  }

  renderAnswer = () => {
    return (
      <p>
        <Markdown markup={this.props.card.answer} />
      </p>
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

  toggleAnswer = () => {
    this.setState({ cardStatus: CARD_STATUS.ANSWER });
  }

  renderActions = () => {
    const {
      onSkipQuestion,
      onNextQuestion,
      onRaiseFlag
    } = this.props;
    
    return (
      <>
        <Button onClick={this.toggleAnswer}>I don't know</Button>
        <Button type="primary" onClick={onSkipQuestion}>I know</Button>
      </>
    )
  }

  render() {
    return (
      <div className="Card">
        <Card>
          {this.renderContent()}
        </Card>
        <div className="FlashCard-Actions">
          {this.renderActions()}
        </div>
      </div>
    );
  }
}

export default FlashCard;
