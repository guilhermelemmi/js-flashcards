import React, { Component } from 'react';
import Intro from './Intro';
import Problem from './Problem';
import Summary from './Summary';
import Utils from './../utils';

const GAME_STATUS = {
  INTRO: 'INTRO',
  PLAYING: 'PLAYING',
  SUMMARY: 'SUMMARY'
};

class Game extends Component {

  state = {
    gameStatus: GAME_STATUS.INTRO,
    cards: [],
    answers: {},
    cardIndex: 0
  }

  playGame = () => {
    const cards = Utils.getCards(10);

    const answers = {};
    cards.forEach((c, i) => {
      answers[i] = null;
    });
  
    this.setState({ 
      gameStatus: GAME_STATUS.PLAYING,
      cards,
      answers,
      cardIndex: 0
    });
  }

  skipQuestion = () => {
    if (this.state.cardIndex < this.state.cards.length - 1) {
      this.setState({ cardIndex: this.state.cardIndex + 1 });
    } else {
      this.setState({ gameStatus: GAME_STATUS.SUMMARY });
    }
  }

  handleNegativeAnswer = () => {
    this.setState({answers: {...this.state.answers, [this.state.cardIndex]: false}});
  }

  handlePositiveAnswer = () => {
    this.setState({answers: {...this.state.answers, [this.state.cardIndex]: true}});
  }

  handlePreviousButton = () => {
    if (this.state.cardIndex > 0) {
      this.setState({ cardIndex: this.state.cardIndex - 1 });
    }
  }

  handleNextButton = () => {
    this.skipQuestion();
  }

  renderIntro() {
    return <Intro onPlay={this.playGame} />;
  }

  renderProblem = () => {
    return (
      <Problem
        card={this.state.cards[this.state.cardIndex]}
        answer={this.state.answers[this.state.cardIndex]}
        cardIndex={this.state.cardIndex}
        cardsTotal={this.state.cards.length}
        onPositiveAnswer={this.handlePositiveAnswer}
        onNegativeAnswer={this.handleNegativeAnswer}
        onPreviousButton={this.handlePreviousButton}
        onNextButton={this.handleNextButton}
      />
    );
  }

  renderSummary = () => {
    return (
      <Summary
        onTryAgain={this.playGame}
        answers={this.state.answers}
      />
    )
  }

  renderContent() {
    switch (this.state.gameStatus) {
      case GAME_STATUS.INTRO:
        return this.renderIntro();
      case GAME_STATUS.PLAYING:
        return this.renderProblem();
      case GAME_STATUS.SUMMARY:
        return this.renderSummary();
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="Game">{this.renderContent()}</div>
    );
  }
}

export default Game;
