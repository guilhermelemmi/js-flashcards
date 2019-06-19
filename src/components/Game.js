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
    cardIndex: 0
  }

  playGame = () => {
    this.setState({ 
      gameStatus: GAME_STATUS.PLAYING,
      cards: Utils.getCards(10),
      cardIndex: 0
    });
  }

  handleSkipQuestion = () => {
    if (this.state.cardIndex < this.state.cards.length - 1) {
      this.setState({ cardIndex: this.state.cardIndex + 1 });
    } else {
      this.setState({ gameStatus: GAME_STATUS.SUMMARY });
    }
  }

  renderIntro() {
    return <Intro onPlay={this.playGame} />;
  }

  renderProblem = () => {
    return (
      <Problem
        card={this.state.cards[this.state.cardIndex]}
        cardIndex={this.state.cardIndex}
        cardsTotal={this.state.cards.length}
        onSkipQuestion={this.handleSkipQuestion}
        onNextQuestion={this.handleSkipQuestion}
        onRaiseFlag={()=>{}}
      />
    );
  }

  renderSummary = () => {
    return <Summary onTryAgain={this.playGame} />;
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
