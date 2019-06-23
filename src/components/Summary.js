import React from 'react';
import { Button } from 'antd';

const Summary = (props) => {
  const {
    answers,
    onTryAgain
  } = props;

  const score = Object.keys(answers).reduce((acc, cur) => {
    switch(answers[cur]){
      case true:
        return {...acc, known: acc.known + 1};
      case false:
        return {...acc, unknown: acc.unknown + 1};
      default:
        return acc;
    }
  }, {known: 0, unknown: 0});

  return (
    <div className="Summary">
      <p>Game Over</p>
      <div>
        Results:
          <p>{score.known} Known</p>
          <p>{score.unknown} Unknown</p>
          <p>{Object.keys(answers).length - (score.known + score.unknown)} Skipped</p>
      </div>
      <Button type="primary" onClick={onTryAgain}>Try Again</Button>
    </div>
  );
}

export default Summary;
