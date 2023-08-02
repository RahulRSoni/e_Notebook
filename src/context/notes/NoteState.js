import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000/"
    const noteInitial = []

    const [notes, setNotes] = useState(noteInitial)
    
    //Get all notes
    const getNotes = async () => {
        //API call

        const response = await fetch(`${host}api/notes/fetchallnotes`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        console.log(json)
        setNotes(json)
    }

    //Add a Note
    const addNote = async (title, description, tag) => {
        //Fatch Note

        const response = await fetch(`http://localhost:5000/api/notes/addnote`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify(title, description, tag) // body data type must match "Content-Type" header
        });
        const note = await response.json(); // parses JSON response into native JavaScript objects
        setNotes(notes.concat(note))
       
       console.log("adding a new note") 

    }

    // Delete a Note
    const deleteNote = async(id) => {
        const response = await fetch(`${host}api/notes/deletenote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = response.json(); // parses JSON response into native JavaScript objects

        console.log(json)

        console.log("delete")
        const newNote = notes.filter((note) => {return note._id !==id})
        setNotes(newNote)
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        //fath API
        const response = await fetch(`${host}api/notes/updatenote/${id}`, {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            body: JSON.stringify(title, description, tag) // body data type must match "Content-Type" header
            });
            const json = await response.json(); // parses JSON response into native JavaScript objects
        
            console.log(json)

            let newNotes = JSON.parse(JSON.stringify(notes))
        //edit note
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id){
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children};
        </noteContext.Provider>
    )
}

export default NoteState;