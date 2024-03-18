import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'; // Import useState hook 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PDF from './components/PDF.jsx';
import Question from './components/Question.jsx';
import Answer from './components/Answer.jsx';
import axios from 'axios';

function Home() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [inputText, setInputText] = useState('Did you know that human-computer interaction has reached a new milestone? Elon Musk recently revealed that individuals with Neuralink brain chips can now control computer mice with their thoughts! This groundbreaking achievement not only showcases the incredible potential of merging human intelligence with technology but also opens up a world of possibilities for the future. Imagine the convenience and efficiency of navigating digital interfaces just by thinking. This is just the beginning of a fascinating journey into the realm of human-machine symbiosis!'); // Create a state variable to hold the input text
  const [question, setQuestion] = useState('control computer using thoughts') // Create a state variable to hold the question
  //now thoughts new a has that know you the with the future the




  function handleInputChange(event) {
    setInputText(event.target.value);
  }


  function handlequestionChange(event) {
    setQuestion(event.target.value);
  }

  // const handleLoadText = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:4000/api/upload-pdf', {
  //       text: inputText
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     console.log(response.data);
  //     alert('Text data loaded!');
  //   } catch (error) {
  //     console.error("Error loading text:", error);
  //     alert('An error occurred while loading the text.');
  //   }
  // };

  const handleLoadText = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/upload-pdf', {
        method: 'POST', // Specify the method
        headers: {
          // Content-Type header to indicate the type of data being sent
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText // Convert the JavaScript object to a JSON string
        }),
      });
  
      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json(); // Parse JSON response into a JavaScript object
      console.log("data in LoadText: ", data);
      alert('Text data loaded!');
    } catch (error) {
      console.error("Error loading text:", error);
      alert('An error occurred while loading the text.');
    }
  };
  
  const askQuery = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/ask-query', {
        method: 'POST', // Specify the method
        headers: {
          // Content-Type header to indicate the type of data being sent
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: question // Convert the JavaScript object to a JSON string
        }),
      });

      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json(); // Parse JSON response into a JavaScript object
      console.log(data);
      setAnswer(data.results); // Assuming results are text segments
    } catch (error) {
      console.error("Error asking query:", error);
      setAnswer('An error occurred while processing the query.');
    }
  }

  useEffect(() => {


  }, [])


  // greet("John");
  // var greet= (name) => {  console.log("Good day " + name);  }
  // function greet(name) {  console.log("Hello" + name);  }
  // greet("John");

  return (
    <>
      <Container>
        <PDF selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        <Form.Group>
          <Form.Label>Enter Text:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={inputText}
            onChange={handleInputChange}
          />
          <Button className='bttn' onClick={handleLoadText}>Load Text</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Text:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={question}
            onChange={handlequestionChange}
          />
          <Button className='bttn' onClick={askQuery}>Ask question</Button>
        </Form.Group>
        {/* <Question currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} /> */}
        <Answer answer={answer} />
      </Container>
    </>
  )
}

export default Home
