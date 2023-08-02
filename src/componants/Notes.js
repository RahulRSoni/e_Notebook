import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" })
    let history = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }else{
            history("/login")
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null);
    const closeRef = useRef(null);
    
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id, etitle:currentNote.title, edescription: currentNote.description, etag : currentNote.tag})
    }

    const hendleclick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        ref.current.click()
        }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div>
                <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            
                            <div className="modal-body">                         
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="etitle" className="form-label">Title</label>
                                        <input type="text" className="form-control" minLength={5} required id="etitle" value={note.etitle} name='etitle' placeholder='Add title...' onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edescription" className="form-label">Description</label>
                                        <input type="text" className="form-control" minLength={5} required id="edescription" value={note.edescription} name='edescription' placeholder='Add description...' onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="etag" className="form-label">Tag</label>0
                                        <input type="text" className="form-control" minLength={5} required id="etag" name='etag' value={note.etag} placeholder='Add tag...' onChange={onChange} />
                                    </div>
                                </form>
                            </div>
                          
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length < 5 || note.edescription.length < 5 || note.etag.length < 0} type="button" className="btn btn-primary" ref={closeRef} onClick={hendleclick}>Update Notes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className='my-3'>
                    <h2>Your notes</h2>
                    <div className="container">
                    {notes.length===0 && 'No notes to display'}
                    </div>
                    <Row md={4} className="my-3">
                        {notes.map((note) => {
                            return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Notes