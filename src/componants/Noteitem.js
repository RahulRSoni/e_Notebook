import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const {note, updateNote} = props;
  return (
    <div>
      <Container>
        <Col md>
      <Card style={{ width: '18rem' }} className="my-3">
        <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
                {note.description}
          </Card.Text>
              <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
              <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note)}}></i>
              
        </Card.Body>
      </Card>
        </Col>
      </Container>
    </div>

  )
}

export default Noteitem
