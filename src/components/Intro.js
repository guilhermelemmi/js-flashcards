import React from 'react';
import { Button } from 'antd';

const Intro = (props) => {
  return (
    <div className="Intro">
      <p>
        This is a Flashcard Game for people studying Javascript
      </p>
      <Button type="primary" onClick={props.onPlay}>Play</Button>
    </div>
  );
}

export default Intro;
