import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Control size="lg" type="text" placeholder="Large text" />
      <br />
      <Form.Control type="text" placeholder="Normal text" />
      <br />
      <Form.Control size="sm" type="text" placeholder="Small text" />
    </Form>
  );
}

const Signup = () => {
  const notify = () => toast("Form submitted successfully!");

  return (
    <div>

      
      <Stack direction="horizontal" gap={2}>
        <TextControlsExample/>
              <Button as="a" variant="primary">
                Button as link
              </Button>
              <Button as="a" variant="success">
                Button as link
              </Button>
              <button onClick={notify}>Notify!</button>
            <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            
            />
            </Stack>
    </div>
  )
}

export default Signup