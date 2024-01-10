import React, { useState } from 'react'
import { Form, FormGroup, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalComp = ({handleClose}) => {
  const [show, setShow] = useState(false);

  const [story, setStory] = useState('');

   const handleInputStory = (event) => {
       setStory(event.target.value);
   }

   const handleSubmit = () => {
    if(story == ""){
      alert("Cannot be empty! ");
    }else if(story.length < 20){
      alert("Story has to have at least 20 characters! ", story);
    }
    else {
       alert("SUBMITTED! ", story);
   }
  }
  const handleShow = () => setShow(true);
  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog style={{position: "absolute",
  top: "190%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  height: "70%",
  bgcolor: "background.paper",

  boxShadow: 24,}} >
      <Modal.Header closeButton show={show} onHide={handleClose}>
        <Modal.Title>Create a story</Modal.Title>
      </Modal.Header>

      <Modal.Body  >
      <InputGroup >
        
        <Form >
          
            <Form.Control   style={{textAlign:"center"}}
          as="textarea"
         rows="5"
         className='form-control2'
         value={story} onChange={handleInputStory}
         />
         </Form>
      </InputGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">Close</Button>
        <Button onClick={handleSubmit}  variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default ModalComp