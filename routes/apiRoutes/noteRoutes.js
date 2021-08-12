const router = require("express").Router();
const {notes} = require('../../db/db');
const {addNewNote, deleteNote} = require('../../lib/noteFunctions');

// get all notes
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

// add notes
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = addNewNote(req.body, notes);
    res.json(note);
})

// delete notes
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});


module.exports = router;