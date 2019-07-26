import React from 'react';
import { Card, Button } from 'antd';

const Intro = (props) => {
  return (
    <div className="Intro">
      <div className="Card">
        <Card>
          <p>
            This is a Flashcard Game for people studying Javascript
          </p>
          <Button type="primary" onClick={props.onPlay}>Play</Button>
        </Card>
      </div>
    </div>
  );
}

export default Intro;
