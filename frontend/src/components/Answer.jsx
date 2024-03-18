import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Answer = ({ answer }) => {
  return (
    <Row className='answer'>
      <Col>
        <h3>Answer:</h3>
        <p>{answer}</p>
      </Col>
    </Row>
  );
};

export default Answer;
