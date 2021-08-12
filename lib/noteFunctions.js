const fs = require("fs");
const path = require("path");

//add notes
function addNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    )
    return note;
};

//delete notes
function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    //re-write the indexes for the remaining notes
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
};


module.exports = {addNewNote, deleteNote};