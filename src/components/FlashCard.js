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
      <p>Q:
        <Markdown markup={this.props.card.question} />
      </p>
    );
  }

  renderAnswer = () => {
    return (
      <p>A:
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
    switch (this.state.cardStatus) {
      case CARD_STATUS.QUESTION:
        this.setState({ cardStatus: CARD_STATUS.ANSWER });
        break;
      case CARD_STATUS.ANSWER:
        this.setState({ cardStatus: CARD_STATUS.QUESTION });
        break;
    }
  }

  render() {
    const {
      onWrongAnswer,
      onRightAnswer
    } = this.props;

    return (
      <div className="Card">
        <Card>
          {this.renderContent()}
        </Card>
        <div className="FlashCard-Actions">
          <Button
            type="primary"
            onClick={onWrongAnswer}
            shape="circle"
            icon='dislike'
            alt="I don't know"
            title="I don't know"
            size="large"
            style={{marginRight: 10, backgroundColor: '#ff4d4f' }}
          />
          <Button
            onClick={this.toggleAnswer}
            shape="circle"
            icon='retweet'
            alt="Flip"
            title="Flip"
            size="large"
          />
          <Button
            type="primary"
            onClick={onRightAnswer}
            shape="circle"
            icon='like'
            alt="I know"
            title="I know"
            size="large"
            style={{marginLeft: 10}}
          />
        </div>
      </div>
    );
  }
}

export default FlashCard;
