import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const hendleclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="contaiver my-3" >
                <form>
                    <h2>Add Note hare...</h2>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' placeholder='Add title...' minLength={5} value={note.title} required onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' placeholder='Add description...' minLength={5} value={note.description} required onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' placeholder='Add tag...' minLength={5} required value={note.tag} onChange={onChange} />
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5 || note.tag.length<0} type="submit" className="btn btn-primary" onClick={hendleclick}>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddNote;
