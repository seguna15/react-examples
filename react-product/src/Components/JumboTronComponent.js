import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class JumboTronComponent extends Component {
  render() {
    return (
      <div className="mt-4 p-5 bg-primary text-white rounded">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="success">Learn more</Button>
        </p>
      </div>
    );
  }
}

export default JumboTronComponent