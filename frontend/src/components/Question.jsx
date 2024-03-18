import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Question = ({ currentQuestion, setCurrentQuestion, handleQuestionSubmit }) => {
  return (
    <Row className='question'>
      <Col>
        <Form.Group>
          <Form.Label>Ask a Question:</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={currentQuestion} 
            onChange={(e) => setCurrentQuestion(e.target.value)} 
          />
          <Button variant="primary" onClick={handleQuestionSubmit}>Submit</Button>  
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Question;
