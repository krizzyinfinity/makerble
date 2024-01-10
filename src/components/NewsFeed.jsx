import React from 'react'
import { Accordion, Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Grid } from 'react-bootstrap-icons'

const NewsFeed = () => {
  return (
    <>
    <div className=' d-flex justify-content-center ' style={{ marginTop: 50, marginBottom:50 }}>
   
        <Form.Control className='input-group'
          placeholder="Post an update"
          aria-label="Post an update"
          aria-describedby="basic-addon2"
        />
        <Button  className="text-capitalize btn-danger  text-light " variant="outline-secondary" id="button-addon2">
          Post
        </Button>
      
    </div>
    
    <div style={{marginLeft:40, marginRight:40}} className="" >
     
     
      <Row className=""style={{ height: "80vh" }} >
        
    <h1 style={{display:"flex"}}>NEWSFEED</h1>
        <Col sm={10}  className=" ">
          
            
           <Card>
     
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
        <Container className='d-flex justify-content-center '>
       
        <InputGroup size="lg" className="mb-3">
       
        <Form.Control
          
          aria-describedby="inputGroup-sizing-lg"
        />
      </InputGroup>
     
        <Button style={{height:45, marginLeft:10}} variant="primary">Comment</Button>
       
        </Container>
      </Card.Body>
    </Card>
             
             
    <Card>
     
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
        <Container className='d-flex justify-content-center '>
       
        <InputGroup size="lg" className="mb-3">
       
        <Form.Control
          
          aria-describedby="inputGroup-sizing-lg"
        />
      </InputGroup>
     
        <Button style={{height:45, marginLeft:10}} variant="primary">Comment</Button>
       
        </Container>
      </Card.Body>
    </Card>
    <Card>
     
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
        <Container className='d-flex justify-content-center '>
       
        <InputGroup size="lg" className="mb-3">
       
        <Form.Control
          
          aria-describedby="inputGroup-sizing-lg"
        />
      </InputGroup>
     
        <Button style={{height:45, marginLeft:10}} variant="primary">Comment</Button>
       
        </Container>
      </Card.Body>
    </Card>
           
          
        </Col>
        <Col sm={2}  className="bg-danger ms-0.6">
        <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0" style={{marginBottom:30, borderRadius:0, marginTop:20, fontFamily:"fantasy"}}>
        <Accordion.Header>Boards</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{marginBottom:30,fontFamily:"fantasy"}}>
        <Accordion.Header>Personal progress</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item style={{fontFamily:"fantasy", borderRadius:0}} eventKey="3">
        <Accordion.Header>Tasks</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default NewsFeed