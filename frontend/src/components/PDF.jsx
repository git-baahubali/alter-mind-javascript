import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const PDF = ({selectedFile,setSelectedFile}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Preview logic (optional)
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleLoadPDF =async () => {
    
    if (!selectedFile) {
      alert('Please select a PDF file first.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(formData);
    setIsSubmitting(true); // indicated loading started
     try {
      const response = await axios.post('http://localhost:4000/api/upload-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log(response.data); // Log the response from the backend
      alert('PDF uploaded successfully!');
    } catch (error) {
      console.error("Error uploading PDF:", error);
      alert('An error occurred while uploading the PDF');
    }finally{
      setIsSubmitting(false); // indicated loading finished
    }
  };


  return (
    <Row>
      <Col>
        <Form.Group controlId="formFile">
          <Form.Label>Upload PDF:</Form.Label>
          <Form.Control type="file" accept=".pdf, .txt" 
          onChange={handleFileChange} 
          onSelect={handleFileChange}/>
          <Button onClick={handleLoadPDF}>{isSubmitting ? 'Loading...' : 'Load PDF'}</Button>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default PDF;
