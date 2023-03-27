import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import { FcExpired } from 'react-icons/fc';
//import { FiAlertTriangle } from 'react-icons/fi';

const Notices = () => {
  const [message, setMessage] = useState('');

  const handleNotice = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data
  };
 return(
<div className='notice'>
<Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTextarea">
        <Form.Label className='label'><FcExpired></FcExpired> Notice</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={message}
          onChange={handleNotice}
          placeholder="Type Notice here..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Generate
      </Button>
    </Form>
  
</div>
  );
};

export default Notices
