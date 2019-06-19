import React from 'react';
import { Button } from 'antd';

const Summary = (props) => {
  return (
    <div className="Summary">
      <p>Summary</p>
      <Button type="primary" onClick={props.onTryAgain}>Try Again</Button>
    </div>
  );
}

export default Summary;
